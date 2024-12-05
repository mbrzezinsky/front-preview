import { Panel } from "@/components/custom/panel.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { EmailIcon, LoginIcon, PasswordIcon } from "@/components/custom/svgs.tsx";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, changePassword, submitLogin } from "./actions";
import { RootState } from "@/lib/store";
import { ThemePicker } from "@/components/custom/theme-picker/theme-picker.tsx";

export default function Login() {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.login);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeEmail(e.target.value));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changePassword(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(submitLogin());
    };

    return (
        <Panel variant={"auth"}>
            <div className="px-6 py-3 lg:px-12 lg:py-10 flex flex-row items-center justify-between">
                <a className="flex h-16 items-center justify-center text-3xl font-semibold" href="/">
                    <div
                        className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Freecer
                    </div>
                </a>
                <div>
                    lang
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
                    <Input size={"md"} type={"text"} name={"email"} labeled bordered placeholder={"Email"} label={"What is your email?"} svg={<EmailIcon/>} value={data.email} onChange={handleEmailChange}/>
                    <div className="h-6 lg:h-12"></div>
                    <Input size={"md"} type={"password"} name={"password"} labeled bordered placeholder={"Password"} label={"What is your password?"} svg={<PasswordIcon/>} value={data.password} onChange={handlePasswordChange}/>
                    <div className="flex flex-row justify-end items-end mt-2">
                        <a href="#" className="flex label-text-alt hover:text-primary transition-colors ">Forgot
                            password?</a>
                    </div>

                    <div className="h-12 lg:h-[84px]"></div>

                    <Button type={"submit"} variant={"primary"}>
                        <LoginIcon />
                        Login now
                    </Button>
                    <Button type={"submit"} variant={"primary"} className={"bg-base-200 mt-4"} outline>
                        Login back as
                    </Button>
                    <div className="h-12"></div>
                    <div
                        className="flex flex-row gap-1 justify-center items-center text-sm font-medium text-base-content">
                        Don't have an account?
                        <a
                            className="font-semibold hover:text-primary transition-colors underline underline-offset-2">Register
                            now</a>
                    </div>
                </div>
            </form>

        </Panel>
    )
}
