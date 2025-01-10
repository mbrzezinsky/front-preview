import { Panel } from "@/components/custom/panel";
import { useState } from "react";
import { motion } from "framer-motion";
import Login from "./login/login-panel";
import Register from "./register/register-panel";
import RegisterForm from "./register/register-form";

export interface AuthProps {
    setIsLogin: (value: boolean) => void;
    setIsRegisterForm: (value: boolean) => void;
}

const sliderVariants = {
    login: { y: "0%" },
    register: { y: "-100%" },
};

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [isRegisterForm, setIsRegisterForm] = useState(false);

    return (
        <Panel className="overflow-hidden" variant={"auth"}>
            <motion.div
                className="w-full h-full will-change-transform"
                variants={sliderVariants}
                animate={isLogin ? "login" : "register"}
                transition={{ duration: 0.9, ease: "easeInOut" }}
            >
                <div className="w-full h-full">
                    <Login
                        setIsLogin={setIsLogin}
                        setIsRegisterForm={setIsRegisterForm}
                    />
                </div>
                <div className="w-full h-full">
                    {isRegisterForm ? (
                        <RegisterForm
                            setIsLogin={setIsLogin}
                            setIsRegisterForm={setIsRegisterForm}
                        />
                    ) : (
                        <Register
                            setIsLogin={setIsLogin}
                            setIsRegisterForm={setIsRegisterForm}
                        />
                    )}
                </div>
            </motion.div>
        </Panel>
    );
}
