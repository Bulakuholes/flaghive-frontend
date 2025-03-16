import Header from "@/components/Header";

export default function Register() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Register</h1>
                    <form method="post">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        <div className="flex flex-col space-y-1 mt-4">
                            <label htmlFor="username" className="text-gray-700 dark:text-gray-300">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        <div className="flex flex-col space-y-1 mt-4">
                            <label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-6 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
