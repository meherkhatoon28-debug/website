// components/Button.jsx
import Link from "next/link";

export default function Button({ href, children }) {
    return (
        <Link
            href={href}
            className="px-6 py-2 bg-gradient-to-br from-slate-600 to-blue-600 text-white rounded-lg shadow-md border border-white/10 transition-all duration-300 text-lg font-semibold hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:border-white/60 hover:-translate-y-1"            >
            {children}
        </Link>
    );
}