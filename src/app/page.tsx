import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            TGS2025
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Koti
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Tietoa
            </a>
            <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Palvelut
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Yhteystiedot
            </a>
          </div>
          <Button className="md:hidden">
            Menu
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Tervetuloa
          <span className="block text-blue-600 dark:text-blue-400">TGS2025</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Moderni verkkosivusto, joka on rakennettu Next.js 14:llä, Tailwind CSS:llä ja shadcn/ui komponenteilla. 
          Valmis integroitavaksi Strapi CMS:n kanssa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Aloita tästä
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Lue lisää {/* TODO: Add link to about page */}
          </Button>
        </div>
      </section>
    </div>
  );
}