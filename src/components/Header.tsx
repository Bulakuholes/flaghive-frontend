import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center p-4 h-64 bg-background-light">
            <h1>FlagHive</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/app">
                            App
                        </Link>
                    </li>
                    <li>
                        <Link href="/events">
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link href="/teams">
                            Teams
                        </Link>
                    </li>
                </ul>
            </nav>

            <nav>
                <img src="https://avatar.iran.liara.run/public/25" alt="Profile Picture" />
                <p>Username</p>
            </nav>
        </header>
    )
}