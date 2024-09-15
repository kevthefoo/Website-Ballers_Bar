import React from "react";
import { FaYoutube, FaDiscord, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Header = () => (
    <header className="flex fixed justify-around px-24 items-center border-b-2 border-b-white h-16 w-full">
        <div className="h-full">
            <h1>Ballers Bar</h1>
        </div>
        <nav>
            <ul className="flex justify-around items-center gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/player">Player</Link>
                </li>
                <li>
                    <Link href="/contact">Team</Link>
                </li>
                <li>
                    <Link href="/contact">Stat</Link>
                </li>
            </ul>
        </nav>
        <div>
            <ul className="flex justify-center items-center gap-4">
                <li>
                    <Link href="/login">
                        <FaYoutube />
                    </Link>
                </li>
                <li>
                    <Link href="/register">
                        <FaDiscord />
                    </Link>
                </li>
                <li>
                    <Link href="/register">
                        <FaTwitter />
                    </Link>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;
