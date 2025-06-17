import Link from "next/link";

export default function Login() {
    // This will be the splash page/login page, currently it is a placeholder to take you to videos
    return (
        <main>
            <Link href="/videos" className="button-link">Go to Videos</Link>
        </main>
    );
}