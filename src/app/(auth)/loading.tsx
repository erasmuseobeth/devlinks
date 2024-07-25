import React from 'react';

export function LoadingSkeleton() {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-6 p-6 font-instrument">
      <div className="h-8 w-48 bg-gray-300 rounded animate-pulse mb-4" />
      <div className="h-4 w-64 bg-gray-200 rounded animate-pulse mb-6" />
      
      <div className="space-y-6 w-full">
        <div className="relative mb-4">
          <div className="h-4 w-24 bg-gray-300 rounded animate-pulse absolute top-1/2 left-4 transform -translate-y-1/2" />
          <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="relative">
          <div className="h-4 w-24 bg-gray-300 rounded animate-pulse absolute top-1/2 left-4 transform -translate-y-1/2" />
          <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="h-10 w-full bg-gray-300 rounded animate-pulse mt-6" />
      </div>
      
      <div className="flex flex-col items-center mt-6">
        <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mt-2" />
      </div>
    </div>
  );
}

export default function Loading() {
    return <LoadingSkeleton />
  }