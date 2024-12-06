export default function Button({
    className,
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`${className} bg-white text-green-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-200 dark:bg-neutral/50 dark:text-secondary dark:hover:bg-neutral/40     transition duration-300`}
        >
            {children}
        </button>
    );
}
