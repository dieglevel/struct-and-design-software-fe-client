import Image from 'next/image'
import Link from 'next/link'
import avatar1 from '@/assets/images/avatar1.png'
import { EvaluateIcon, FavoriteIcon, OrderIcon, UserIcon } from '@/assets/svgs'
import { useEffect, useState } from 'react'
import { SidebarMenu, SidebarMenuItem, SidebarProvider } from '@/components/ui/sidebar'
import { SidebarCollapsibleItem } from './side-bar-collapsible'
import useAuth from '@/hooks/api/useAuth'

interface MenuItemProps {
  href: string
  name: string
}

interface UserFormData {
  fullName: string
  email: string
  phone: string
  birthday: Date | undefined
  avatarUrl: string
}

const accountMenuItems: MenuItemProps[] = [
  {
    href: '/profile/information',
    name: 'Thông tin cá nhân',
  },
  {
    href: '/profile/change-password',
    name: 'Đổi mật khẩu',
  },
  {
    href: '/profile/change-password',
    name: 'Thông tin thanh toán',
  },
  {
    href: '/profile/delete-account',
    name: 'Xóa tài khoản',
  },
  {
    href: '/profile/information',
    name: 'Đăng xuất',
  },
]

const orderMenuItems: MenuItemProps[] = [
  {
    href: '/profile/booked',
    name: 'Đặt tour',
  },
]

export const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { me, handleGetMe, handleLogout } = useAuth()

  useEffect(() => {
    handleGetMe()
  }, [handleGetMe])

  const [userData, setUserData] = useState<UserFormData>({
    fullName: '',
    email: '',
    phone: '',
    birthday: undefined,
    avatarUrl: '',
  })

  useEffect(() => {
    if (me) {
      setUserData({
        fullName: me.fullName || '',
        email: me.email || '',
        phone: me.phone || '',
        birthday: me.birthday ? new Date(me.birthday) : undefined,
        avatarUrl: me?.avatarUrl as string,
      })
    }
  }, [me])

  const handleActiveIndex = (activeItem: number) => {
    setActiveIndex(activeItem)
    if (activeItem === 4) {
      handleLogout()
    }
  }

  return (
    <div className="w- container max-w-xs bg-white p-4">
      <div className="mb-6 flex flex-col items-center">
        <div className="relative mb-3 h-24 w-24">
          <Image src={avatar1} alt="Profile picture" width={96} height={96} className="rounded-full object-cover" />
        </div>
        <h2 className="text-xl font-bold text-[#1a3c61]">{userData.fullName}</h2>
        <p className="text-sm text-gray-500">{userData?.avatarUrl}</p>
      </div>
      <SidebarProvider>
        <SidebarMenu>
          <SidebarCollapsibleItem
            title="Tài khoản"
            Icon={UserIcon}
            items={accountMenuItems}
            activeIndex={activeIndex}
            setActiveIndex={handleActiveIndex}
          />
          <SidebarCollapsibleItem
            title="Đơn hàng"
            Icon={OrderIcon}
            items={orderMenuItems}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            indexOffset={accountMenuItems.length}
          />
          <SidebarMenuItem>
            <Link href="#" className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#1a3c61]">Yêu thích đã lưu</h3>
              <FavoriteIcon className="h-5 w-5 text-[#1a3c61]" />
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="#" className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#1a3c61]">Đánh giá của bạn</h3>
              <EvaluateIcon className="h-5 w-5 text-[#1a3c61]" />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarProvider>

      {/* <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a3c61]">Tài khoản</h3>
            <UserIcon className="h-5 w-5 text-[#1a3c61]" />
          </div>
          <ul className="space-y-4 ml-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`pb-2 ${
                    activeIndex === index
                      ? "text-[#ff6b4a] border-b border-[#ff6b4a]"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link href="#" className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a3c61]">Đơn hàng</h3>
            <OrderIcon className="h-5 w-5 text-[#1a3c61]" />
          </Link>
        </div>

        <div>
          <Link href="#" className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a3c61]">
              Yêu thích đã lưu
            </h3>
            <FavoriteIcon className="h-5 w-5 text-[#1a3c61]" />
          </Link>
        </div>

        <div>
          <Link href="#" className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#1a3c61]">
              Đánh giá của bạn
            </h3>
            <EvaluateIcon className="h-5 w-5 text-[#1a3c61]" />
          </Link>
        </div>
      </div> */}
    </div>
  )
}
