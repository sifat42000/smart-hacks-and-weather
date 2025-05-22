
import Link from 'next/link';
import { Sun, PiggyBank, BookOpenCheck, ArrowRight, CloudSun } from 'lucide-react';
import SectionCard from '../components/SectionCard';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-fuchsia-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Avoid motion.h1 in server component, use static h1 */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg mt-12 mb-8">
        A Smart App for Financial Insights and  <span className="whitespace-nowrap">Weather Forecasts</span>
      </h1>

      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 justify-center items-stretch px-4">
        {/* Real-Time Weather */}
        <SectionCard className="flex-1 flex flex-col items-center justify-between bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-800 cursor-pointer hover:scale-105 transition-all" asChild>
          <Link href="/weather" prefetch={true}>
            <>
              <CloudSun className="w-12 h-12 text-blue-500 mb-2 animate-spin-slow" />
              <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-200">রিয়েল-টাইম আবহাওয়া</h2>
              <p className="mb-4 text-center text-gray-700 dark:text-gray-200">লাইভ আবহাওয়া রিপোর্ট ও ৫ দিনের পূর্বাভাস দেখুন</p>
            </>
          </Link>
        </SectionCard>

        {/* 💰 Ninja Money Saving Tips */}
        <SectionCard className="flex-1 flex flex-col items-center justify-between bg-gradient-to-br from-pink-100 to-pink-300 dark:from-pink-900 dark:to-pink-800 cursor-pointer hover:scale-105 transition-all" asChild>
          <Link href="/ninja-saving-tips" prefetch={true}>
            <>
              <span className="text-5xl mb-2">💰</span>
              <h2 className="text-xl font-bold mb-2 text-pink-700 dark:text-pink-200">নিনজা মানি সেভিং টিপস</h2>
              <p className="mb-2 text-center text-gray-700 dark:text-gray-200 font-semibold">টাকা জমানোর ৬০টি দুর্ধর্ষ কৌশল — সহজ কার্ড ও এক্সপ্যান্ডেবল লিস্টে সাজানো, একদম বাংলায়।</p>
              <p className="mb-4 text-center text-gray-600 dark:text-gray-300 text-sm">বুঝে শিখুন, কাজে লাগান!</p>
            </>
          </Link>
        </SectionCard>

        {/* ক্যালকুলেটর কার্ড */}
        <SectionCard className="flex-1 flex flex-col items-center justify-between bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-yellow-900 dark:to-yellow-800 cursor-pointer hover:scale-105 transition-all" asChild>
          <Link href="/calculators" prefetch={true}>
            <>
              <BookOpenCheck className="w-12 h-12 text-yellow-500 mb-2" />
              <h2 className="text-xl font-bold mb-2 text-yellow-700 dark:text-yellow-200">ক্যালকুলেটরে</h2>
              <p className="mb-4 text-center text-gray-700 dark:text-gray-200">বাজেট, সঞ্চয়, বয়স, খরচ ও সময় জন্য স্মার্ট ক্যালকুলেটরে</p>
            </>
          </Link>
        </SectionCard>

        {/* Smart Finance Stories Card */}
        <SectionCard className="flex-1 flex flex-col items-center justify-between bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-yellow-900 dark:to-yellow-800 cursor-pointer hover:scale-105 transition-all" asChild>
          <Link href="/smart-finance-stories" prefetch={true}>
            <>
              <span className="text-5xl mb-2">📚</span>
              <h2 className="text-xl font-bold mb-2 text-yellow-700 dark:text-yellow-200">স্মার্ট ফাইন্যান্স গল্প</h2>
              <p className="mb-2 text-center text-gray-700 dark:text-gray-200 font-semibold">৩টি চোখ খুলে দেওয়ার মতো বাস্তব অভিজ্ঞতা এবং ৬০+ দরকষাকষির হ্যাক </p>
              <p className="mb-4 text-center text-gray-600 dark:text-gray-300 text-sm">গল্পে গল্পে শেখা স্মার্ট টাকাপয়সার পাঠ!</p>
            </>
          </Link>
        </SectionCard>
      </div>

      {/* নিচের ৪টি কার্ড ডিলিট করা হয়েছে, শুধুমাত্র উপরের ৩টি কার্ড ও ক্যালকুলেটর কার্ড থাকবে */}
    </main>
  );
}
