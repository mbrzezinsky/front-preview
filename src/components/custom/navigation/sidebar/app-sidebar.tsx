import * as React from "react";
import {
    BookOpen,
    Bot,
    Frame,
    LifeBuoy,
    Map,
    Settings2,
    SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/custom/navigation/sidebar/nav-main.tsx";
import { NavProjects } from "@/components/custom/navigation/sidebar/nav-projects.tsx";
import { NavSecondary } from "@/components/custom/navigation/sidebar/nav-secondary.tsx";
import { NavUser } from "@/components/custom/navigation/sidebar/nav-user.tsx";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar.tsx";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Tickets",
            url: "/tickets",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        {
            title: "Models",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Map,
        },
    ],
    components: [
        {
            name: "Accordion",
            url: "#accordion",
            icon: Frame,
        },
        {
            name: "Alert",
            url: "#alert",
            icon: Frame,
        },
        {
            name: "Alert dialog",
            url: "#alert-dialog",
            icon: Frame,
        },
        {
            name: "Avatar",
            url: "#avatar",
            icon: Frame,
        },
        {
            name: "Badge",
            url: "#badge",
            icon: Frame,
        },
        {
            name: "Breadcrumb",
            url: "#breadcrumb",
            icon: Frame,
        },
        {
            name: "Button",
            url: "#button",
            icon: Frame,
        },
        {
            name: "Calendar",
            url: "#calendar",
            icon: Frame,
        },
        {
            name: "Card",
            url: "#card",
            icon: Frame,
        },
        {
            name: "Checkbox",
            url: "#checkbox",
            icon: Frame,
        },
        {
            name: "Code",
            url: "#code",
            icon: Frame,
        },
        {
            name: "Dialog",
            url: "#dialog",
            icon: Frame,
        },
        {
            name: "Divider",
            url: "#divider",
            icon: Frame,
        },
        {
            name: "Form",
            url: "#form",
            icon: Frame,
        },
        {
            name: "Grid",
            url: "#grid",
            icon: Frame,
        },
        {
            name: "Heading",
            url: "#heading",
            icon: Frame,
        },
        {
            name: "Icon",
            url: "#icon",
            icon: Frame,
        },
        {
            name: "Image",
            url: "#image",
            icon: Frame,
        },
        {
            name: "Input",
            url: "#input",
            icon: Frame,
        },
        {
            name: "Link",
            url: "#link",
            icon: Frame,
        },
        {
            name: "List",
            url: "#list",
            icon: Frame,
        },
        {
            name: "Menu",
            url: "#menu",
            icon: Frame,
        },
        {
            name: "Modal",
            url: "#modal",
            icon: Frame,
        },
        {
            name: "Nav",
            url: "#nav",
            icon: Frame,
        },
        {
            name: "Popover",
            url: "#popover",
            icon: Frame,
        },
        {
            name: "Progress",
            url: "#progress",
            icon: Frame,
        },
        {
            name: "Radio",
            url: "#radio",
            icon: Frame,
        },
        {
            name: "Select",
            url: "#select",
            icon: Frame,
        },
        {
            name: "Sidebar",
            url: "#sidebar",
            icon: Frame,
        },
        {
            name: "Spinner",
            url: "#spinner",
            icon: Frame,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="md" asChild>
                            <a
                                href={"/"}
                                className="items-center justify-center"
                            >
                                <div className="bg-gradient-to-r text-3xl font-semibold from-primary cursor-pointer to-secondary bg-clip-text text-transparent">
                                    Freecer
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjects projects={data.components} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
