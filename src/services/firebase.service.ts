import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyD13bd2N1P8IwywaT9_MPul9iJZdKuhuX0",
  authDomain: "tour-70dad.firebaseapp.com",
  projectId: "tour-70dad",
  storageBucket: "tour-70dad.firebasestorage.app",
  messagingSenderId: "9045164668",
  appId: "1:9045164668:web:6180c53050f0e69f2f3ff9",
}

const app = initializeApp(firebaseConfig)
const vapidKey = "BAacWRhUGBBmHTBizh43akIK9-sU-9wFD9vxJUZzCbUxYkLXQJzvqEleJcg_YLkUWrlZKsTQ8jWbzShdr_br_Hs"

export async function requestPermissionAndGetToken() {
  if (typeof window === 'undefined') return null

  const { getMessaging, getToken } = await import('firebase/messaging')
  const messaging = getMessaging(app)

  const permission = await Notification.requestPermission()
  if (permission !== 'granted') throw new Error('User từ chối quyền thông báo.')

  const token = await getToken(messaging, { vapidKey })
  if (!token) throw new Error('Chưa lấy được token.')

  console.log('Token FCM:', token)
  return token
}

export async function onMessageListener() {
  if (typeof window === 'undefined') return null

  const { getMessaging, onMessage } = await import('firebase/messaging')
  const messaging = getMessaging(app)

  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('Thông báo foreground:', payload)
      resolve(payload)
    })
  })
}

export function registerServiceWorker() {
  if (typeof window === 'undefined') return

  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Service Worker đăng ký:', registration)
        return registration
      })
      .catch((error) => {
        console.error('Đăng ký Service Worker lỗi:', error)
      })
  }

  return Promise.reject('Service Worker không được hỗ trợ')
}
