export default function Home() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Über mich</h1>
        
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
          <img
            src="/collin.jpeg"
            alt="Collin Weber"
            className="w-48 h-48 rounded-full object-cover shadow-lg ring-4 ring-gray-100"
          />
          
          <div className="space-y-4">
            <p className="text-lg sm:text-xl leading-relaxed">
              Hallo, Ich bin Collin Weber,<br />
              18 Jahre alt und Lernender Informatiker fachrichtung Applikationsentwicklung.<br />
              Nebenbei spiele ich Professionell Volleyball beim VBC Uni Bern in der Nationalliga B
            </p>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}