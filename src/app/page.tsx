import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Welcome on FlagHive
          </h1>
        </div>
      </main>
    </div>
  );
}
