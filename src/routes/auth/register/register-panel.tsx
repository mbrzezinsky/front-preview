import { AuthProps } from "../page.auth";
import { Panel } from "@/components/custom/panel";
import LanguagePicker from "@/components/custom/language-picker/language-picker";
import { ThemePicker } from "@/components/custom/theme-picker/theme-picker";
import { Input } from "@/components/ui/input";
import { LoginIcon, TokenIcon } from "@/components/custom/svgs";
import { Button } from "@/components/ui/button";
import { Building2Icon } from "lucide-react";

export default function Register({ setIsLogin, setIsRegisterForm }: AuthProps) {
    // const dispatch = useDispatch();
    // const data = useSelector((state: RootState) => state.register);

    //    const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //       dispatch(changeToken(e.target.value));
    // };

    //    const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //        e.preventDefault();
    //        dispatch(submitRegisterToken());
    //    };

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
            <form id="register-form">
                <div className="hidden lg:flex lg:h-6" />
                <div className="flex flex-col px-6 lg:px-12 py-10">
                    <h1 className="flex items-center justify-center text-2xl font-semibold">
                        Register
                    </h1>
                    <h1 className="mt-2.5 flex items-center justify-center text-base-content/70 text-sm font-semibold">
                        Enter your token to join existing company
                    </h1>
                    <div className="h-12"></div>
                    <Input
                        size={"md"}
                        type={"text"}
                        name={"token"}
                        labeled
                        bordered
                        placeholder={"Token"}
                        label={"What is your token?"}
                        svg={<TokenIcon />}
                    />
                    <div className="h-12"></div>
                    <Button type={"submit"} variant={"primary"}>
                        <LoginIcon />
                        Join now
                    </Button>
                    <div className="divider my-12">or</div>
                    <Button
                        onClick={() => setIsRegisterForm(true)}
                        type={"button"}
                        variant={"primary"}
                    >
                        <Building2Icon />
                        Create new company
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
                </div>
            </form>
        </Panel>
    );
}
