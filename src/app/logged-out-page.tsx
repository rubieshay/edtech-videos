import Link from "next/link";

export default function LoggedOutPage() {
    return (
        <main id="logged-out-page">
            <section>
                <h2>You have been logged out.</h2>
                <Link href="/" className="button-link">
                    <span>Login</span>
                </Link>
            </section>
        </main>
    );
}