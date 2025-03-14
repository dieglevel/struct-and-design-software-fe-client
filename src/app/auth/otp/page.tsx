"use client";
import { LogoICon } from "@/assets/svgs";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import React from "react";
const InputOTPPage = () => {
    const router = useRouter();
    function confirmOTP(e: React.FormEvent) {
        e.preventDefault();
        router.push("/auth/change-password");
    }
    return (
        <div
            className="
            w-full h-full
            max-w-[80%] max-h-[80%]
            md:w-1/2 
            lg:w-1/3 
            xl:w-1/4 
            2xl:w-1/5 
            "
        >
            <LogoICon className="w-30 h-[160px] m-auto p-b" />
            <div className="pb-10">
                <h1 className="text-colorbrand-midnightBlue-950 text-2xl font-bold text-center pt-10">
                    Quên mật khẩu?
                </h1>
                <p className="text-base text-colorbrand-grayWhite-500 font-thin text-center  md:text-nowrap ">
                    Đừng lo chúng tôi sẽ giúp bạn khôi phục tài khoản.
                </p>
            </div>
            <div className="">
                <form className="flex flex-col">
                    <label className="text-colorbrand-midnightBlue-950 text-base font-bold my-2 ">
                        Nhập mã xác thực
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập mã xác thực"
                        className="border-2 border-colorbrand-grayWhite-200 rounded-md p-2 "
                    />
                    <div className="flex flex-row justify-end gap-2">
                        <p className="text-colorbrand-grayWhite-200 text-base  my-2 ">
                            Không nhận được mã?
                        </p>
                        <button className="text-colorbrand-burntSienna-500">
                            <p className="text-colorbrand-burntSienna-600">Gửi lại</p>
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <button
                            onClick={confirmOTP}
                            className="bg-colorbrand-burntSienna-500 text-colorbrand-grayWhite-50 rounded-md p-2 w-1/2 m-auto mt-10"
                        >
                            Tiếp theo
                        </button>
                        <div className="flex flex-row justify-center gap-2 mt-5">
                            <p className="text-colorbrand-grayWhite-500 text-sm text-center">
                                Hoặc
                            </p>
                            <a
                                href="./register"
                                className="text-colorbrand-burntSienna-500 text-sm"
                            >
                                Tạo tài khoản mới
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default InputOTPPage;
