import { BiSupport } from "react-icons/bi"; 
import { MdLiveHelp } from "react-icons/md";
import { MdAnnouncement } from "react-icons/md"; 
import { HiDocumentReport } from "react-icons/hi"; 
import { FaReact } from "react-icons/fa"; 
import { TbCertificate } from "react-icons/tb"; 
import { ReactNode } from "react";
import { FaUserGraduate } from "react-icons/fa"; 
import { MdOutlineDashboard } from 'react-icons/md';

interface ISidebarConfig {
    title: string,
    route_name: string,
    reactIcon: ReactNode
}

export const SidebarConfig: ISidebarConfig[] = [
    {
        title: "Dashboard",
        route_name: "dashboard",
        reactIcon: <MdOutlineDashboard />,
    },
    {
        title: "Student Management",
        route_name: "dashboard.student",
        reactIcon: <FaUserGraduate />
    },
    {
        title: "Course Management",
        route_name: "dashboard.course",
        reactIcon: <TbCertificate />
    },
    {
        title: "AI Management",
        route_name: "dashboard.genai",
        reactIcon: <FaReact />
    },
    {
        title: "Reports & Analytics",
        route_name: "dashboard.analytics",
        reactIcon: <HiDocumentReport />
    },
    {
        title: "Announcements",
        route_name: "dashboard.message",
        reactIcon: <MdAnnouncement />
    },
    {
        title: "Feedback & Support",
        route_name: "dashboard.support",
        reactIcon: <BiSupport />
    },
    {
        title: "Docs",
        route_name: "dashboard.docs",
        reactIcon: <MdLiveHelp />
    }
]