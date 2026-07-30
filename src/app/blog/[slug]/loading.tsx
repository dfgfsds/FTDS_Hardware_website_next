export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
      
      {/* Date & Author Skeleton */}
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
      
      {/* Banner Skeleton */}
      <div className="w-full h-[500px] bg-gray-200 rounded-lg mb-8"></div>
      
      {/* Content Skeleton */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
}
