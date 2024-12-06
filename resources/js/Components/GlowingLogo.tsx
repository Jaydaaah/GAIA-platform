import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function GlowingLogo({ children }: PropsWithChildren) {
    return (
        <Link href="/">
            <div className="relative font-commissioner text-2xl font-semibold text-primary">
                <h1 className="absolute blur-sm animate-pulse">{children}</h1>
                <h1 className="">{children}</h1>
            </div>
        </Link>
    );
}
