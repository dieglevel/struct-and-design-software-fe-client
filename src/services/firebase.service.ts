import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import AuthService from "@/services/Auth.service";
// Cấu hình Firebase của bạn (copy từ Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyD13bd2N1P8IwywaT9_MPul9iJZdKuhuX0",
  authDomain: "tour-70dad.firebaseapp.com",
  projectId: "tour-70dad",
  storageBucket: "tour-70dad.firebasestorage.app",
  messagingSenderId: "9045164668",
  appId: "1:9045164668:web:6180c53050f0e69f2f3ff9",
};

// Khởi tạo app Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Public VAPID key lấy từ Firebase Console
const vapidKey = "BAacWRhUGBBmHTBizh43akIK9-sU-9wFD9vxJUZzCbUxYkLXQJzvqEleJcg_YLkUWrlZKsTQ8jWbzShdr_br_Hs";

export function requestPermissionAndGetToken() {
  console.log("Yêu cầu quyền nhận thông báo...");
  return Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        console.log("Quyền được cấp, lấy token...");
        return getToken(messaging, { vapidKey });
      } else {
        throw new Error("User từ chối quyền thông báo.");
      }
    })
    .then((token) => {
      if (token) {
        console.log("Token FCM của bạn:", token);
        return token;
      } else {
        throw new Error("Chưa lấy được token.");
      }
    });
}

// Lắng nghe thông báo khi app đang chạy (foreground)
export function onMessageListener() {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Thông báo foreground nhận được: ", payload);
      resolve(payload);
    });
  });
}

// Đăng ký service worker cho firebase-messaging-sw.js
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('Service Worker đã được đăng ký:', registration);
        return registration;
      })
      .catch((error) => {
        console.error('Đăng ký Service Worker thất bại:', error);
      });
  }
  return Promise.reject('Service Worker không được hỗ trợ');
}
