"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function loading() {
  return (
    <div className=" h-screen flex flex-col space-y-3 justify-center items-center">
      <Skeleton className="h-[375px] w-[500px] rounded-xl" />
    </div>
  )
}
