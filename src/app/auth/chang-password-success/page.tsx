import { LogoICon } from "@/assets/svgs";

const ChangePasswordSuccessPage = () => {
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
                        Mật khẩu mới
                        <span className="text-colorbrand-burntSienna-600 text-lg">*</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu mới"
                        className="border-2 border-colorbrand-grayWhite-200 rounded-md p-2 "
                    />
                    <label className="text-colorbrand-midnightBlue-950 text-base font-bold my-2 ">
                        Xác nhận mật khẩu mới
                        <span className="text-colorbrand-burntSienna-600 text-lg">*</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Xác nhận mật khẩu mới"
                        className="border-2 border-colorbrand-grayWhite-200 rounded-md p-2 "
                    />
                    <div className="flex flex-col">
                        <button className="bg-colorbrand-burntSienna-500 text-colorbrand-grayWhite-50 rounded-md p-2 w-1/2 m-auto mt-10">
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
export default ChangePasswordSuccessPage;
