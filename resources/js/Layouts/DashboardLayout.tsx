import { MdOutlineDashboard } from "react-icons/md";

import NavLink from "@/Components/Sidebar/NavLink";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { PropsWithChildren, ReactNode } from "react";
import { SidebarConfig } from "./DashboardConfiguration";
import GlowingLogo from "@/Components/GlowingLogo";

export default function DashboardLayout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-background">
            <Sidebar header={header}>
                <div className="p-3">
                    <GlowingLogo>GAIA Platform</GlowingLogo>
                </div>
                <br/>
                {SidebarConfig.map(
                    ({ title, route_name, reactIcon }, index) => (
                        <NavLink
                            key={`${index}.${title}`}
                            route_name={route_name}
                            reactIcon={reactIcon}
                        >
                            {title}
                        </NavLink>
                    )
                )}
            </Sidebar>
            <div className="p-0 sm:ml-64">
                <main className="">
                    {children}
                </main>
            </div>
        </div>
    );
}
