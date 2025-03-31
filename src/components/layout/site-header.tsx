"use client";

import Link from "next/link";
import { Menu, Phone, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DiscordIcon,
  FacebookIcon,
  GoogleIcon,
  LogoICon,
  YoutubeIcon,
} from "@/assets/svgs";

const navigation = [
  { name: "TRANG CHỦ", href: "/home" },
  { name: "TOUR", href: "/tour" },
  { name: "KHÁCH SẠN", href: "/khach-san" },
  { name: "CẨM NANG DU LỊCH", href: "/cam-nang" },
  { name: "LIÊN HỆ", href: "/lien-he" },
];

export default function SiteHeader() {
  const [activeItem, setActiveItem] = useState<string>("");

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveItem(
      navigation.find((item) => item.href === pathname)?.name || ""
    );
  }, []);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#003580] text-white">
        <div className="container mx-auto flex h-10 items-center justify-between px-4">
          <div className="hidden space-x-4 md:flex justify-around w-2/6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>1800 0123</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>information@travel@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden space-x-2 md:flex">
              <Link href="#" className="hover:text-gray-200">
                <GoogleIcon className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <YoutubeIcon className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <DiscordIcon className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <FacebookIcon className="h-4 w-4" />
              </Link>
            </div>
            <Link
              href={"/profile/information"}
              className="text-white hover:text-gray-200 font-bold"
            >
              Tài khoản
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b bg-white ">
        <div className="container mx-auto flex h-16 items-center px-4">
          <div className="flex items-center flex-1 justify-between">
            <Link href="/" className="mr-6">
              <LogoICon height={60} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:space-x-4 lg:space-x-6 w-1/2 justify-around">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-bold transition-colors hover:text-primary ${
                    item.name === activeItem
                      ? "text-[#F27052]"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4" />
                    <span>1800 0123</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <span>information@travel@gmail.com</span>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
