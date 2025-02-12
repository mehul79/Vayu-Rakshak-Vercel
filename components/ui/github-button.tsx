"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

interface OpenInGitHubButtonProps {
  repoUrl: string
}

export default function OpenInGitHubButton({ repoUrl }: OpenInGitHubButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-2 mt-6"
      onClick={() => window.open(repoUrl, "_blank")}
    >
      <Github className="w-4 h-4" />
      Open in GitHub
    </Button>
  )
}

