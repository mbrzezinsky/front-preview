import { Panel } from "@/components/custom/panel";
import { AuthProps } from "../page.auth";
import { Button } from "@/components/ui/button";
import { EmailIcon, LoginIcon, PasswordIcon } from "@/components/custom/svgs";
import { Input } from "@/components/ui/input";
import LanguagePicker from "@/components/custom/language-picker/language-picker";
import { ThemePicker } from "@/components/custom/theme-picker/theme-picker";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { useContext } from "react";
import { UserContext } from "@/contexts/user-context";
import { NavLink } from "react-router-dom";
import { changeEmail, changePassword, submitLogin } from "./reducer.login";

export default function Login({ setIsLogin }: AuthProps) {
    const userData = useContext(UserContext);
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: RootState) => state.login);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeEmail(e.target.value));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changePassword(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(submitLogin(data.dto));
    };

    return (
        <Panel variant={"auth"}>
            <div className="px-6 py-3 lg:px-12 lg:py-10 flex flex-row items-center justify-between">
                <a
                    className="flex h-16 items-center justify-center text-3xl font-semibold"
                    href="/"
                >
                    <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Freecer
                    </div>
                </a>
                <div className="flex flex-row items-center justify-between gap-6">
                    <LanguagePicker />
                    <ThemePicker />
                </div>
            </div>
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="hidden lg:flex lg:h-6" />
                <div className="flex flex-col px-6 lg:px-12 py-10">
                    <h1 className="flex items-center justify-center text-2xl font-semibold">
                        Login
                    </h1>
                    <h1 className="mt-2.5 flex items-center justify-center text-base-content/70 text-sm font-semibold">
                        Enter your email below to login to your account
                    </h1>
                    <div className="h-12"></div>
                    <Input
                        size={"md"}
                        type={"text"}
                        name={"email"}
                        labeled
                        bordered
                        placeholder={"Email"}
                        label={"What is your email?"}
                        svg={<EmailIcon />}
                        value={data.dto.email}
                        onChange={handleEmailChange}
                    />
                    <div className="h-6 lg:h-12"></div>
                    <Input
                        size={"md"}
                        type={"password"}
                        name={"password"}
                        labeled
                        bordered
                        placeholder={"Password"}
                        label={"What is your password?"}
                        svg={<PasswordIcon />}
                        value={data.dto.password}
                        onChange={handlePasswordChange}
                    />
                    <div className="flex flex-row justify-end items-end mt-2">
                        <a
                            href="#"
                            className="flex label-text-alt hover:text-primary transition-colors "
                        >
                            Forgot password?
                        </a>
                    </div>
                    <div className="h-12 lg:h-[84px]"></div>
                    <Button type={"submit"} variant={"primary"}>
                        <LoginIcon />
                        Login now
                    </Button>

                    {userData?.sessionData?.email ? (
                        <Button
                            type={"button"}
                            variant={"primary"}
                            className={"bg-base-200 mt-4"}
                            outline
                        >
                            <NavLink to={"/"}>
                                Login back as {userData?.sessionData.email}
                            </NavLink>
                        </Button>
                    ) : null}
                    <div className="h-12"></div>
                    <div className="flex flex-row gap-1 justify-center items-center text-sm font-medium text-base-content">
                        Don't have an account?
                        <a
                            onClick={() => setIsLogin(false)}
                            className="font-semibold hover:text-primary cursor-pointer transition-colors underline underline-offset-2"
                        >
                            Register now
                        </a>
                    </div>
                </div>
            </form>
        </Panel>
    );
}
