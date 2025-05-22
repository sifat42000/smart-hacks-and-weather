export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-800 animate-pulse">
      <div className="w-16 h-16 rounded-full bg-blue-300 dark:bg-blue-800 mb-6 animate-bounce" />
      <div className="h-6 w-48 bg-blue-200 dark:bg-blue-700 rounded mb-2" />
      <div className="h-4 w-64 bg-blue-100 dark:bg-blue-900 rounded mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mt-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-2xl shadow-xl bg-white/60 dark:bg-gray-900/60 border-2 border-blue-100 dark:border-blue-800 p-6 h-32 animate-pulse" />
        ))}
      </div>
    </div>
  );
}
