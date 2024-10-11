import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Twitch, Twitter, Facebook } from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logotorch72dpi-MCTxG7KJZmZmYYFYDXJObBr4jcE82c.jpg"
            alt="Torch Fire Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="ml-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
            Torch Fire
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-pink-400 transition-colors"
            href="#home"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-pink-400 transition-colors"
            href="#featured-content"
          >
            Streams
          </Link>
          <Link
            className="text-sm font-medium hover:text-pink-400 transition-colors"
            href="#schedule"
          >
            Schedule
          </Link>
          <Link
            className="text-sm font-medium hover:text-pink-400 transition-colors"
            href="#connect"
          >
            Connect
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="home" className="relative w-full py-20 md:py-32 lg:py-48">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logotorch72dpi-MCTxG7KJZmZmYYFYDXJObBr4jcE82c.jpg')] bg-center bg-no-repeat bg-cover opacity-5"></div>
          <div className="relative container px-4 md:px-6 mx-auto max-w-6xl z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Welcome to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                    Torch Fire's Channel
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl lg:text-2xl">
                  Ignite your gaming experience with epic adventures and blazing
                  gameplay!
                </p>
              </div>
              <div className="space-x-4 pt-6">
                <Button className="bg-pink-600 hover:bg-pink-700 text-lg py-6 px-8 rounded-full shadow-lg shadow-pink-500/50">
                  <Link
                    href="https://www.twitch.tv/torchfire2020"
                    target="_blank"
                    className="flex flex-row items-center"
                  >
                    <Twitch className="mr-2 h-6 w-6" />
                    Follow on Twitch
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 text-lg py-6 px-8 rounded-full"
                >
                  <Link href="#schedule">View Schedule</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="featured-content"
          className="w-full py-20 md:py-32 bg-gray-800"
        >
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
              Featured Content
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="bg-gray-900 text-white border border-pink-500/50 overflow-hidden group hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                >
                  <div className="relative">
                    <Image
                      src={`/placeholder.svg?height=200&width=400`}
                      width={400}
                      height={200}
                      alt={`Featured stream ${i}`}
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-cyan-400">
                      Epic Gaming Moment {i}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">
                      Check out this insane play from last night's stream!
                    </p>
                    <Button className="bg-pink-600 hover:bg-pink-700 w-full rounded-full">
                      Watch Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="schedule" className="w-full py-20 md:py-32 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
              Stream Schedule
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                (day) => (
                  <Card
                    key={day}
                    className="bg-gray-800 text-white border border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl text-cyan-400">
                        {day}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl mb-2 text-pink-400">
                        9:30 PM - 11:30 PM EST
                      </p>
                      <p className="text-lg text-gray-400">Game: The Finals</p>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>
        <section id="connect" className="w-full py-20 md:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
              Connect With Me
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                href="#"
                className="flex flex-col items-center space-y-2 group"
              >
                <div className="p-6 bg-purple-600 text-white rounded-full transition-transform group-hover:scale-110 shadow-lg shadow-purple-500/50">
                  <Twitch className="h-12 w-12" />
                </div>
                <span className="text-lg font-medium text-cyan-400">
                  Twitch
                </span>
              </Link>
              <Link
                href="https://x.com/TorchfireG70902"
                className="flex flex-col items-center space-y-2 group"
              >
                <div className="p-6 bg-blue-400 text-white rounded-full transition-transform group-hover:scale-110 shadow-lg shadow-blue-400/50">
                  <Twitter className="h-12 w-12" />
                </div>
                <span className="text-lg font-medium text-cyan-400">
                  Twitter
                </span>
              </Link>
              <Link
                href="https://www.facebook.com/torchfire2020"
                className="flex flex-col items-center space-y-2 group"
              >
                <div className="p-6 bg-blue-600 text-white rounded-full transition-transform group-hover:scale-110 shadow-lg shadow-blue-600/50">
                  <Facebook className="h-12 w-12" />
                </div>
                <span className="text-lg font-medium text-cyan-400">
                  Facebook
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logotorch72dpi-MCTxG7KJZmZmYYFYDXJObBr4jcE82c.jpg"
                alt="Torch Fire Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-center text-sm leading-loose md:text-left text-gray-400">
                © 2024 Torch Fire. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.twitch.tv/torchfire2020"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Twitch className="h-6 w-6" />
                <span className="sr-only">Twitch</span>
              </Link>
              <Link
                href="https://x.com/TorchfireG70902"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.facebook.com/torchfire2020"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
