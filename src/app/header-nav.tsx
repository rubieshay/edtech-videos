import Link from "next/link";
import { NavPage } from "./utils/constants";

export default function HeaderNav({ activeLink } : {activeLink: NavPage}) {
    return (
        <nav>
            <Link href="/videos" className="home-link">
                <h1>EdVid</h1>
            </Link>
            <Link href="/videos" className={"nav-link" + (activeLink === NavPage.learn ? " nav-link-active" : "")}>
                <span>Learn</span>
            </Link>
            <Link href="/content-studio" className={"nav-link" + (activeLink === NavPage.contentStudio ? " nav-link-active" : "")}>
                <span>Content Studio</span>
            </Link>
            <Link href="/" className="logout-button">
                <span>Logout</span>
            </Link>
        </nav>
    );
}