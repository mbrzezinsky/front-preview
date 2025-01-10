import { AppWrapper } from "@/components/custom/wrapper";
import { useContext, useState } from "react";
import { ProfileHeader } from "@/components/custom/profile/profile-header";
import { ProfileNav } from "@/components/custom/profile/profile-nav";
import { ProfileDetails } from "@/components/custom/profile/profile-details";
import { SecurityTab } from "@/components/custom/profile/tabs/security-tab";
import { NotificationsTab } from "@/components/custom/profile/tabs/notifications-tab";
import { SettingsTab } from "@/components/custom/profile/tabs/settings-tab";
import { AppearanceTab } from "@/components/custom/profile/tabs/appearance-tab";
import { UserContext } from "@/contexts/user-context";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("User Details");
    const user_context = useContext(UserContext);
    const user = {
        firstname: user_context?.sessionData?.firstname ?? "",
        lastname: user_context?.sessionData?.lastname ?? "",
        role: user_context?.sessionData?.role ?? "",
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "User Details":
                return <ProfileDetails />;
            case "Security":
                return <SecurityTab />;
            case "Notifications":
                return <NotificationsTab />;
            case "Appearance":
                return <AppearanceTab />;
            case "Settings":
                return <SettingsTab />;
            default:
                return <ProfileDetails />;
        }
    };

    return (
        <AppWrapper>
            <div className="min-h-fit h-full bg-background">
                <div className="grid h-full lg:grid-cols-[240px_1fr]">
                    <aside className="bg-card/50 md:border-r-0 lg:border-r">
                        <div className="flex h-16 items-center border-b px-3">
                            <span className="text-lg font-semibold">
                                Account
                            </span>
                        </div>
                        <ProfileNav
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </aside>
                    <main className="flex flex-col min-h-fit h-full">
                        <ProfileHeader />
                        <div className="flex-1 space-y-8 p-8 pt-24">
                            <div className="md:hidden">
                                <h1 className="text-2xl font-semibold">
                                    {user.firstname} {user.lastname}
                                </h1>
                                <p className="text-muted-foreground">
                                    {user.role}
                                </p>
                            </div>
                            {renderTabContent()}
                        </div>
                    </main>
                </div>
            </div>
        </AppWrapper>
    );
}
