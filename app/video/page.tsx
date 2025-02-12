import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import OpenInGitHubButton from "@/components/ui/github-button";

export default function Page() {
  return (
    <div className="h-screen overflow-hidden flex flex-col relative">
    <BackgroundBeamsWithCollision className="flex-grow overflow-hidden flex flex-col">
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Coming Soon{" "}
      </h2>
      <p className="mt-4"> 
        This feature is working on the development enviroment
      </p>
      <OpenInGitHubButton  repoUrl="https://github.com/mehul79/Vayu-Rakshak-Submission"
      />
    </BackgroundBeamsWithCollision>
    </div>
  );
}
