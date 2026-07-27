export default function RestIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.96-6.5-4.54-6.5-8.5V8.37L12 5.18l6.5 3.19V11.5c0 3.96-2.64 7.54-6.5 8.5z" />
            <path d="M8 10h8v2H8zm0 3h8v2H8zm0 3h5v2H8z" />
        </svg>
    )
}
