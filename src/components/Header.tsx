import Link from "next/link";
import DarkModeButton from "./DarkMode";
const authed = false;
export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center p-4 h-16 bg-gray-200 dark:bg-gray-800 dark:text-white shadow-md">
      <h1 className="text-2xl font-bold">FlagHive</h1>
      {authed && (
        <nav className="flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/app" className="hover:text-gray-500">
                App
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-gray-500">
                Events
              </Link>
            </li>
            <li>
              <Link href="/teams" className="hover:text-gray-500">
                Teams
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <div className="flex items-center space-x-4">
        {authed && (
          <div className="flex items-center space-x-2">
            <img
              src="https://avatar.iran.liara.run/public/25"
              alt="Profile Picture"
              className="w-12 rounded-full"
            />
            <p className="font-medium">Username</p>
          </div>
        )}
        <DarkModeButton />
      </div>
    </header>
  );
}
