import {Wrapper} from "@/components/custom/wrapper.tsx";
import {Outlet} from "react-router-dom";
import {AuthPageImage} from "@/components/custom/svgs.tsx";

export default function AuthRoot() {
    return (
        <Wrapper className={"flex overflow-x-hidden"} variant={"whScreen"}>
            <Outlet/>

            <div className="max-w-screen hidden lg:flex w-full items-center justify-center h-screen bg-base-200">
                <div className="hidden lg:flex h-full w-[1000px]">
                    <AuthPageImage/>
                </div>
            </div>
        </Wrapper>
    )
}