import ApplicationLogo from "@/Components/ApplicationLogo";
import Card from "@/Components/Card/Card";
import GAIALogo from "@/Components/GAIALogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col sm:flex-row items-center bg-gray-100 pt-6 justify-center gap-8 lg:gap-16 xl:gap-32 sm:pt-0 dark:bg-background">
            <div>
                <Link href="/">
                    <GAIALogo className="w-[300px] md:w-[400px] lg:w-[600px] fill-current text-primary" />
                </Link>
                <span className="flex gap-2 text-7xl justify-center">
                    <h1 className="font-commissioner font-semibold tracking-tight text-primary">
                        GAIA
                    </h1>
                    <h2 className="font-lato font-light tracking-wide italic text-secondary">
                        Platform
                    </h2>
                </span>
            </div>

            <Card className="mt-6 w-full overflow-hidden shadow-md sm:max-w-md">
                {children}
            </Card>
        </div>
    );
}
