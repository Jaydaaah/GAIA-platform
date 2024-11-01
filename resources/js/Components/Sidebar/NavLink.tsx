import { InertiaLinkProps, Link } from "@inertiajs/react";
import { ReactNode } from "react";
import { useRoute } from "../../../../vendor/tightenco/ziggy/src/js";

export default function NavLink({
    children,
    className = "",
    reactIcon,
    route_name,
    href,
}: {
    className?: string;
    children?: ReactNode;
    reactIcon?: ReactNode;
    route_name?: string;
    href?: string;
}) {

    return (
        <Link
            className={`${className}
            flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group
            ${route_name && !!route().current<string>(route_name) && "bg-blue-500 font-bold bg-opacity-5"}`}
            href={!!route_name ? route(route_name) : href ?? "#"}
        >
            {reactIcon}
            <span className="flex-1 ms-3 whitespace-nowrap">{children}</span>
        </Link>
    );
}
