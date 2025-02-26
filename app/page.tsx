import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Instagram,
  Siren,
  Expand,
  Radar,
  ClockArrowUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "@/components/magicui/globe";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="absolute top-0 left-0 right-0 h-screen bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <main>
        <section className="relative">
          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-24">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                    Detect. Respond.{" "}
                    <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                      Save Lives.
                    </span>
                  </h1>
                  <p className="text-muted-foreground sm:text-xl">
                    Ensure accuracy and efficiency in disaster response with our
                    AI-powered drone system. Achieve up to 98% precision in
                    real-time survivor detection.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/video">
                      Vayu Drishti <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/demo">View Demo</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold text-primary">95%</h4>
                    <p className="text-sm text-muted-foreground">
                      Accuracy Rate
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold text-primary">24/7</h4>
                    <p className="text-sm text-muted-foreground">Coverage</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold text-primary">10M+</h4>
                    <p className="text-sm text-muted-foreground">Lives Saved</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="relative flex size-full max-w-2xl items-center justify-center rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 overflow-hidden">
                  <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold text-transparent dark:from-white dark:to-slate-900/10">
                    Fast Real Time Analysis
                  </span>
                  <Globe className="absolute top-28" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-muted/50 py-24">
          <div className="container space-y-12">
            <h2 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              Features
            </h2>
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 space-y-2">
                  <Radar className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Disaster Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    Identify survivors in earthquakes, forest fires, and
                    collapsed buildings with AI-driven precision.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <ClockArrowUp className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Real-Time Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor disaster zones instantly with live drone footage and
                    automatic human detection.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <Siren className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Emergency Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive accurate location data and survivor count to
                    accelerate rescue operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="presentation" className="py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                See It In Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-[42rem] mx-auto">
                Watch how our AI-powered drones detect and track survivors in
                real-time disaster conditions.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/NCuQvLvRU0Y?si=Q1gscS6CsrePIobf"
                  title="Ved Indicator Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Vayu Rakshak. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
