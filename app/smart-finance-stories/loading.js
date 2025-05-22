export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-yellow-900 dark:to-yellow-800 animate-pulse">
      <div className="w-16 h-16 rounded-full bg-yellow-300 dark:bg-yellow-800 mb-6 animate-bounce" />
      <div className="h-6 w-48 bg-yellow-200 dark:bg-yellow-700 rounded mb-2" />
      <div className="h-4 w-64 bg-yellow-100 dark:bg-yellow-900 rounded mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mt-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-2xl shadow-xl bg-white/60 dark:bg-gray-900/60 border-2 border-yellow-100 dark:border-yellow-800 p-6 h-32 animate-pulse" />
        ))}
      </div>
    </div>
  );
}
