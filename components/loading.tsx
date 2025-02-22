export default function LoadingSkeleton() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  
        <h1 className="text-3xl font-bold text-center mb-8 relative">People Detection Demo</h1>
  
        {/* Video Container Skeleton */}
        <div className="relative w-full md:w-[800px] aspect-video rounded-lg mx-auto overflow-hidden">
          <div className="w-full h-full bg-muted animate-pulse rounded-lg" />
        </div>
      </div>
    )
  }
  
  