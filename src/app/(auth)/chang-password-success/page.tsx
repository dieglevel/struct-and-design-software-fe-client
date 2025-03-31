"use client";
import { LogoICon } from "@/assets/svgs";
import { TickSuccessChangePasswordIcon } from "@/assets/svgs/auth";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

const ChangePasswordSuccessPage = () => {
    const route = useRouter();
    function onLogin(e: React.FormEvent) {
        e.preventDefault();
        route.push("/dashboard/home");
    }
    return (
        <div>
            <LogoICon className="w-30 h-40 m-auto" />
            <TickSuccessChangePasswordIcon className="w-20 h-40 m-auto " />
            <h1 className="text-center text-2xl">Đổi mật khẩu thành công</h1>
            <div className="flex justify-center items-center ">
                <Button
                    onClick={onLogin}
                    className="bg-colorbrand-burntSienna-500 hover:bg-colorbrand-grayWhite-700 w-48 mt-5"
                >
                    Đăng nhập
                </Button>
            </div>
        </div>
    );
};
export default ChangePasswordSuccessPage;
