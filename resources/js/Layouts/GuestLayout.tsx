import ApplicationLogo from "@/Components/ApplicationLogo";
import Card from "@/Components/Card/Card";
import GAIALogo from "@/Components/GAIALogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-background">
            <div>
                <Link href="/">
                    <GAIALogo className="w-40 fill-current text-primary" />
                </Link>
            </div>

            <Card className="mt-6 w-full overflow-hidden shadow-md sm:max-w-md">
                {children}
            </Card>
        </div>
    );
}
