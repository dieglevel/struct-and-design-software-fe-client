"use client";
import { LoginRequestDTO } from "@/models/request";
import { LogoICon } from "../../../assets/svgs";
import { useForm } from "react-hook-form";
import api from "@/libs/axios/axios.config";
import { useEffect } from "react";
const LoginPage = () => {
    const { register, handleSubmit } = useForm<LoginRequestDTO>();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            window.location.href = "/home";
        }
    }, []);

    const onSubmit = async (data: LoginRequestDTO) => {
        try {
            const res = await api.post(`${process.env.NEXT_PUBLIC_USER_SERVICE}/auth/token`, data);
            if (res.data.data.token) {
                localStorage.setItem("token", res.data.data.token);
                window.location.reload();
            }
            console.log("Login successful:", res.data);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

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
                    Đăng nhập
                </h1>
                <p className="text-base text-colorbrand-grayWhite-500 font-thin text-center  md:text-nowrap ">
                    Cùng V-Travel đồng h
                </p>
                ành với bạn trong các chuyến đi.
            </div>
            <div className="">
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <label className="text-colorbrand-midnightBlue-950 text-base font-bold my-2 ">
                        Tên đăng nhập
                        <span className="text-colorbrand-burntSienna-600 text-lg pl-1">*</span>
                    </label>

                    <input
                        type="text"
                        {...register("username", { required: true })}
                        placeholder="Nhập tên đăng nhập"
                        className="border-2 border-colorbrand-grayWhite-200 rounded-md p-2 "
                    />
                    <label className="text-colorbrand-midnightBlue-950 text-base font-bold my-2 ">
                        Nhập mật khẩu
                        <span className="text-colorbrand-burntSienna-600 text-lg pl-1">*</span>
                    </label>
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        placeholder="Nhập mật khẩu"
                        className="border-2 border-colorbrand-grayWhite-200 rounded-md p-2 "
                    />
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex items-center gap-2 my-2">
                            <input
                                type="radio"
                                name="keepStatusLogin"
                                id="keepStatusLogin"
                                className="w-4 h-4"
                            />
                            <label
                                htmlFor="keepStatusLogin"
                                className="text-sm text-colorbrand-grayWhite-500"
                            >
                                Duy trì đăng nhập
                            </label>
                        </div>
                        <a href="./forget-password" className="text-colorbrand-burntSienna-500">
                            Quên mật khẩu?
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <button
                            className="bg-colorbrand-burntSienna-500 text-colorbrand-grayWhite-50 rounded-md p-2 w-1/2 m-auto mt-10"
                            type="submit"
                        >
                            Đăng nhập
                        </button>
                        <div className="flex flex-row justify-center gap-2 mt-5">
                            <p className="text-colorbrand-grayWhite-500 text-sm text-center">
                                Bạn chưa có tài khoản?
                            </p>
                            <a
                                href="./register"
                                className="text-colorbrand-burntSienna-500 text-sm"
                            >
                                Đăng ký ngay
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default LoginPage;
