import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  GooglePayIcon,
  MasterCardIcon,
  PaypalIcon,
  VisaIcon,
} from "@/assets/svgs";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container mx-auto px-4 py-6 mt-5 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* About Us Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Về Chúng Tôi</h3>
            <p className="text-sm text-muted-foreground">
              Không hổ danh Thổ địa du lịch, V-Travel.com sẽ giúp bạn không bỏ
              lỡ bất cứ điều tuyệt vời nào trong chuyến du lịch của mình. Chúng
              tôi luôn chọn cho bạn khách sạn phù hợp, tour độc đáo, thông tin
              du lịch chi tiết kèm mức giá hợp dẫn.
            </p>
          </div>

          {/* Policies Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Chính sách & Quy định</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Điều khoản và điều kiện
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Quy định về thanh toán
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Quy định về xác nhận thông tin
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Chính sách về hủy & hoàn trả tiền
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Các câu hỏi thường gặp
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liên hệ với chúng tôi</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>32 Tây Mỗ, Nam Từ Liêm, Hà Nội</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>information@VTravel@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1800 10 11 21</span>
              </div>
            </div>

            {/* Email Subscription */}
            <div className="space-y-2">
              <div className="flex max-w-sm space-x-2">
                <Input
                  type="email"
                  placeholder="Nhập email của bạn..."
                  className="flex-1"
                />
                <Button variant="default" style={{ backgroundColor: '#F27052' }}>Xác nhận</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center">
          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            Copyright © 2023 VTravel. All Rights Reserved.
          </div>
          {/* Payment Methods */}
          <div className="flex space-x-4 pt-4">
            <VisaIcon width={56} height={18} />
            <PaypalIcon width={56} height={18} />
            <MasterCardIcon width={56} height={18} />
            <GooglePayIcon width={56} height={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}
