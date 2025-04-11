export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-center sm:text-left">
          Explore my projects, learn more about me, and get in touch.
        </p>
        <nav aria-label="Main navigation" className="flex gap-4 flex-wrap justify-center sm:justify-start">
          <a
            href="/about"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 font-medium text-sm sm:text-base h-10 px-5"
          >
            About Me
          </a>
          <a
            href="/projects"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 font-medium text-sm sm:text-base h-10 px-5"
          >
            My Projects
          </a>
          <a
            href="/contact"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 font-medium text-sm sm:text-base h-10 px-5"
          >
            Contact Me
          </a>
        </nav>
      </main>
      <footer className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}