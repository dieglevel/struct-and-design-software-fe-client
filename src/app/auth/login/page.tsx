import { LogoICon } from "../../../../public/svgs";

const LoginPage = () => {
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
                    Cùng V-Travel đồng hành với bạn trong các chuyến đi.
                </p>
            </div>
            <div className="">
                <form className="flex flex-col">
                    <label className="text-colorbrand-midnightBlue-950 text-base font-bold my-2 ">
                        Số điện thoại
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập số điện thoại"
                        className="border-2 border-colorbrand-grayWhite-200 rounded-md p-2 "
                    />
                    <label className="text-colorbrand-midnightBlue-950 text-base font-bold my-2 ">
                        Nhập mật khẩu
                    </label>
                    <input
                        type="password"
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
                        <a href="#" className="text-colorbrand-burntSienna-500">
                            Quên mật khẩu?
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-colorbrand-burntSienna-500 text-colorbrand-grayWhite-50 rounded-md p-2 w-1/2 m-auto mt-10">
                            Đăng nhập
                        </button>
                        <div className="flex flex-row justify-center gap-2 mt-5">
                            <p className="text-colorbrand-grayWhite-500 text-sm text-center">
                                Bạn chưa có tài khoản?
                            </p>
                            <a href="#" className="text-colorbrand-burntSienna-500 text-sm">
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
