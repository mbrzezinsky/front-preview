import {SidebarInset} from "@/components/ui/sidebar";
import {Outlet} from "react-router-dom";
import {AppSidebar} from "@/components/custom/navigation/sidebar/app-sidebar.tsx";

import {AppTopbar} from "@/components/custom/navigation/topbar/app-topbar.tsx";

export default function AppRoot() {
    return (
        <>
            <AppSidebar/>
            <SidebarInset>
                <AppTopbar/>
                <Outlet/>
            </SidebarInset>
        </>
    )
}