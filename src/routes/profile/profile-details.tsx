import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { UserContext } from "@/contexts/user-context";
import { Dot, GithubIcon } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function ProfileDetails() {
    const user_context = useContext(UserContext);
    const data = {
        user: {
            name: user_context?.sessionData?.tenant ?? "",
            email: user_context?.sessionData?.email ?? "",
            firstname: user_context?.sessionData?.firstname ?? "",
            lastname: user_context?.sessionData?.lastname ?? "",
            avatar: "https://github.com/shadcn.png",
        },
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-row mt-4 justify-center">
                <Avatar className="w-32 h-32">
                    <AvatarImage
                        src={data.user.avatar}
                        alt={`${data.user.firstname} ${data.user.lastname}`}
                    />
                    <AvatarFallback>
                        {data.user.firstname[0]}
                        {data.user.lastname[0]}
                    </AvatarFallback>
                </Avatar>
            </div>
            <span className="text-center text-lg font-semibold mt-4">
                {user_context?.sessionData?.firstname ?? ""}{" "}
                {user_context?.sessionData?.lastname ?? ""}
            </span>
            <Separator className="my-8" />
            <div className="ml-1 flex flex-row w-full h-full">
                <h1 className="w-64 font-semibold">Email address</h1>
                <span className="ml-8">{data.user.email}</span>
            </div>
            <Separator className="my-8" />
            <div className="ml-1 flex flex-row w-full h-full">
                <h1 className="w-64 font-semibold">Phone number</h1>
                <span className="ml-8">+48 123 456 789</span>
            </div>
            <Separator className="my-8" />
            <div className="ml-1 flex flex-row w-full h-full">
                <h1 className="w-64 font-semibold">Connected accounts</h1>
                <div className="flex flex-row ml-8 gap-2">
                    <GithubIcon />
                    <span>Github</span>
                    <Dot />
                    <Link
                        className="hover:text-primary"
                        to="https://github.com/wishuuu/"
                    >
                        wishuuu
                    </Link>
                </div>
            </div>
        </div>
    );
}
