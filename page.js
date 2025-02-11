"use client"; // Ensures this runs as a client component

import JobBoard from "@/components/JobBoard";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Job Board</h1>
      <JobBoard />
    </main>
  );
}
