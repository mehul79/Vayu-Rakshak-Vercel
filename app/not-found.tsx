import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";


export default function App() {
    return (
        <div>
            <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center justify-center text-center">
                <div>
                    <h1 className="inline-block border-r border-black/30 m-0 mr-5 py-2.5 pr-6 text-2xl font-medium align-top">
                        404
                    </h1>
                        <Link href="/">
                        <InteractiveHoverButton className="top-1">Go Home</InteractiveHoverButton>
                        </Link>
                </div>
            </div>
        </div>
    );
}
