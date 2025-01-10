import LanguagePicker from "@/components/custom/language-picker/language-picker";
import { TokenIcon, LoginIcon } from "@/components/custom/svgs";
import { ThemePicker } from "@/components/custom/theme-picker/theme-picker";
import { Input } from "@/components/ui/input";
import { AuthProps } from "../page.auth";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { Panel } from "@/components/custom/panel";
import { Button } from "@/components/ui/button";
import {
    changeUsername,
    changePassword,
    changeFirstname,
    changeLastname,
    changeEmail,
    changeTenant,
    submitRegister,
} from "./reducer.register";

export default function RegisterForm({
    setIsLogin,
    setIsRegisterForm,
}: AuthProps) {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: RootState) => state.register);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeUsername(e.target.value));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changePassword(e.target.value));
    };

    const handleFirstnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeFirstname(e.target.value));
    };

    const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeLastname(e.target.value));
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeEmail(e.target.value));
    };

    const handleTenantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTenant(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(submitRegister(data.dto));
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
            <form id="register-form" onSubmit={handleSubmit}>
                <div className="hidden lg:flex lg:h-6" />
                <div className="flex flex-col px-6 lg:px-12 py-10">
                    <h1 className="flex items-center justify-center text-2xl font-semibold">
                        Register
                    </h1>
                    <h1 className="mt-2.5 flex items-center justify-center text-base-content/70 text-sm font-semibold">
                        Please enter your information to create a new company
                    </h1>
                    <div className="h-12"></div>
                    <Input
                        size={"md"}
                        type={"text"}
                        name={"username"}
                        labeled
                        bordered
                        placeholder={"Username"}
                        label={"What is your username?"}
                        svg={<TokenIcon />}
                        value={data.dto.username}
                        onChange={handleUsernameChange}
                    />
                    <div className="h-8" />
                    <Input
                        size={"md"}
                        type={"text"}
                        name={"password"}
                        labeled
                        bordered
                        placeholder={"Password"}
                        label={"What is your password?"}
                        svg={<TokenIcon />}
                        value={data.dto.password}
                        onChange={handlePasswordChange}
                    />
                    <div className="h-8" />
                    <Input
                        size={"md"}
                        type={"text"}
                        name={"firstname"}
                        labeled
                        bordered
                        placeholder={"Firstname"}
                        label={"What is your firstname?"}
                        svg={<TokenIcon />}
                        value={data.dto.firstname}
                        onChange={handleFirstnameChange}
                    />
                    <div className="h-8" />
                    <Input
                        size={"md"}
                        type={"text"}
                        name={"lastname"}
                        labeled
                        bordered
                        placeholder={"Lastname"}
                        label={"What is your lastname?"}
                        svg={<TokenIcon />}
                        value={data.dto.lastname}
                        onChange={handleLastnameChange}
                    />
                    <div className="h-8" />
                    <Input
                        size={"md"}
                        type={"text"}
                        name={"email"}
                        labeled
                        bordered
                        placeholder={"Email"}
                        label={"What is your email?"}
                        svg={<TokenIcon />}
                        value={data.dto.email}
                        onChange={handleEmailChange}
                    />
                    <div className="h-8" />
                    <Input
                        size={"md"}
                        type={"text"}
                        name={"tenant"}
                        labeled
                        bordered
                        placeholder={"Company name"}
                        label={"What is your company name?"}
                        svg={<TokenIcon />}
                        value={data.dto.tenant}
                        onChange={handleTenantChange}
                    />
                    <div className="h-12"></div>
                    <Button type={"submit"} variant={"primary"}>
                        <LoginIcon />
                        Create account
                    </Button>
                    <div className="h-12"></div>
                    <div className="flex flex-row gap-1 justify-center items-center text-sm font-medium text-base-content">
                        Already have an account?
                        <a
                            onClick={() => setIsLogin(true)}
                            className="font-semibold hover:text-primary cursor-pointer transition-colors underline underline-offset-2"
                        >
                            Login now
                        </a>
                    </div>
                    <div className="h-6"></div>
                    <div className="flex flex-row gap-1 justify-center items-center text-sm font-medium text-base-content">
                        Already have a token?
                        <a
                            onClick={() => setIsRegisterForm(false)}
                            className="font-semibold hover:text-primary cursor-pointer transition-colors underline underline-offset-2"
                        >
                            Register via token
                        </a>
                    </div>
                </div>
            </form>
        </Panel>
    );
}
