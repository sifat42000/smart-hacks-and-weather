"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';


// ১. মানি ম্যানেজমেন্ট (৫০/৩০/২০)
function calculateMoneyManagement(income: number) {
  const saving = Math.round(income * 0.2);
  const needs = Math.round(income * 0.5);
  const wants = Math.round(income * 0.3);
  return [
    `আপনার প্রয়োজনীয় খরচ: ${needs} টাকা`,
    `আপনার ইচ্ছেমতো খরচ: ${wants} টাকা`,
    `সঞ্চয় করুন: ${saving} টাকা`,
  ];
}

// ২. বয়স হিসাব (type="date" ইনপুট থেকে)
function calculateAgeFullFromDate(birthDate: Date|null) {
  if (!birthDate) return ['জন্ম তারিখ দিন!'];
  const now = new Date();
  let diffMs = now.getTime() - birthDate.getTime();
  if (diffMs < 0) return ['ভবিষ্যতের তারিখ দেওয়া হয়েছে!'];
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const totalSeconds = Math.floor(diffMs / 1000);
  return [
    `আপনার বয়স: ${years} বছর, ${months} মাস, ${days} দিন`,
    `মোট দিন: ${totalDays} দিন`,
    `মোট সপ্তাহ: ${totalWeeks} সপ্তাহ`,
    `মোট মাস (প্রায়): ${years * 12 + months} মাস`,
    `মোট ঘণ্টা: ${totalHours} ঘণ্টা`,
    `মোট মিনিট: ${totalMinutes} মিনিট`,
    `মোট সেকেন্ড: ${totalSeconds} সেকেন্ড`,
    years < 18 ? 'আপনি অপ্রাপ্তবয়স্ক' : 'আপনি প্রাপ্তবয়স্ক',
  ];
}

// ৩. নির্দিষ্ট কাজের জন্য টাইম ম্যানেজমেন্ট
function calculateTaskTime(totalDays: number, totalHours: number, task: string) {
  const perDay = (totalHours / totalDays).toFixed(2);
  return [
    `আপনাকে ${totalDays} দিনে কাজটি শেষ করতে হবে`,
    `প্রতিদিন ${perDay} ঘণ্টা ${task} করতে হবে`,
  ];
}

// ৪. টাইম ম্যানেজমেন্ট (দিনের কাজ ভাগ)
function calculateDayTime(wake: string, sleep: string) {
  const [h1, m1] = wake.split(":").map(Number);
  const [h2, m2] = sleep.split(":").map(Number);
  let total = (h2 + m2/60) - (h1 + m1/60);
  if (total < 0) total += 24;
  const work = (total * 0.5).toFixed(2);
  const rest = (total * 0.2).toFixed(2);
  const study = (total * 0.3).toFixed(2);
  return [
    `মোট সময়: ${total.toFixed(2)} ঘণ্টা`,
    `কাজ: ${work} ঘণ্টা`,
    `পড়াশোনা: ${study} ঘণ্টা`,
    `বিশ্রাম: ${rest} ঘণ্টা`,
  ];
}

// ৫. ব্যয় হিসাব
function calculateExpense(amount: number, people: number) {
  const perPerson = (amount / people).toFixed(2);
  return [
    `মোট ${amount} টাকা ${people} জনের জন্য`,
    `প্রতি জনের খরচ: ${perPerson} টাকা`,
  ];
}


export default function CalculatorsPage() {
  // States for all calculators
  const [income, setIncome] = useState(0);
  const [birthDate, setBirthDate] = useState<Date|null>(null);
  const [task, setTask] = useState('');
  const [totalDays, setTotalDays] = useState(1);
  const [totalHours, setTotalHours] = useState(1);
  const [wake, setWake] = useState('07:00');
  const [sleep, setSleep] = useState('23:00');
  const [expense, setExpense] = useState(0);
  const [people, setPeople] = useState(1);
  const [result, setResult] = useState<string[]>([]);
  const [active, setActive] = useState(0);

  // Calculator titles
  const calculators = [
    '৫০/৩০/২০ মানি ম্যানেজমেন্ট',
    'বয়স হিসাব',
    'কাজের জন্য টাইম প্ল্যান',
    'দিনের সময় ভাগ',
    'ব্যয় হিসাব',
  ];

  // Colorful bg classes
  const colors = [
    'from-blue-400 to-blue-600',
    'from-green-400 to-green-600',
    'from-pink-400 to-pink-600',
    'from-yellow-400 to-yellow-600',
    'from-purple-400 to-purple-600',
  ];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smart Calculator</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {calculators.map((title, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full font-bold text-white shadow transition-all duration-300 bg-gradient-to-r ${colors[i]} ${active === i ? 'scale-110 ring-4 ring-white/60' : 'opacity-80 hover:scale-105'}`}
            onClick={() => { setActive(i); setResult([]); }}
          >
            {title}
          </button>
        ))}
      </div>


      {/* Calculator Forms - Uniform Horizontal Layout */}
      <div className="max-w-xl mx-auto bg-white/80 dark:bg-gray-900/80 rounded-xl shadow-lg p-6 animate-fade-in">
        {active === 0 && (
          <form className="flex flex-wrap gap-4 items-center justify-center" onSubmit={e => { e.preventDefault(); setResult(calculateMoneyManagement(income)); }}>
            <label className="font-bold">মাসিক আয়:</label>
            <input type="number" className="border px-4 py-2 rounded w-48 text-center" placeholder="আপনার মাসিক আয় লিখুন" value={income || ''} onChange={e => setIncome(Number(e.target.value))} min={0} />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded shadow">হিসাব করুন</button>
          </form>
        )}
        {active === 1 && (
          <form className="flex flex-wrap gap-4 items-center justify-center" onSubmit={e => { e.preventDefault(); setResult(calculateAgeFullFromDate(birthDate)); }}>
            <label className="font-bold">জন্ম তারিখ:</label>
            <input
              type="date"
              className="border px-2 py-1 rounded w-48 text-center"
              value={birthDate ? birthDate.toISOString().slice(0, 10) : ''}
              onChange={e => setBirthDate(e.target.value ? new Date(e.target.value) : null)}
              max={new Date().toISOString().slice(0, 10)}
            />
            <span className="text-xs text-gray-500">(উদাহরণ: ২০০০-০৫-২০)</span>
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded shadow">বয়স হিসাব করুন</button>
          </form>
        )}
        {active === 2 && (
          <form className="flex flex-wrap gap-4 items-center justify-center" onSubmit={e => { e.preventDefault(); setResult(calculateTaskTime(totalDays, totalHours, task)); }}>
            <label className="font-bold">কাজের নাম:</label>
            <input type="text" className="border px-4 py-2 rounded w-40 text-center" placeholder="যেমন: পড়া, প্রজেক্ট" value={task} onChange={e => setTask(e.target.value)} />
            <label className="font-bold">মোট দিন:</label>
            <input type="number" className="border px-4 py-2 rounded w-24 text-center" placeholder="যেমন: ৫" value={totalDays || ''} onChange={e => setTotalDays(Number(e.target.value))} min={1} />
            <label className="font-bold">মোট ঘণ্টা:</label>
            <input type="number" className="border px-4 py-2 rounded w-24 text-center" placeholder="যেমন: ২০" value={totalHours || ''} onChange={e => setTotalHours(Number(e.target.value))} min={1} />
            <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded shadow">টাইম প্ল্যান করুন</button>
          </form>
        )}
        {active === 3 && (
          <form className="flex flex-wrap gap-4 items-center justify-center" onSubmit={e => { e.preventDefault(); setResult(calculateDayTime(wake, sleep)); }}>
            <label className="font-bold">উঠার সময়:</label>
            <input type="time" className="border px-2 py-1 rounded w-32 text-center" value={wake} onChange={e => setWake(e.target.value)} />
            <label className="font-bold">ঘুমানোর সময়:</label>
            <input type="time" className="border px-2 py-1 rounded w-32 text-center" value={sleep} onChange={e => setSleep(e.target.value)} />
            <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded shadow">দিন ভাগ করুন</button>
          </form>
        )}
        {active === 4 && (
          <form className="flex flex-wrap gap-4 items-center justify-center" onSubmit={e => { e.preventDefault(); setResult(calculateExpense(expense, people)); }}>
            <label className="font-bold">মোট টাকা:</label>
            <input type="number" className="border px-4 py-2 rounded w-32 text-center" placeholder="যেমন: ১০০০" value={expense || ''} onChange={e => setExpense(Number(e.target.value))} min={0} />
            <label className="font-bold">মোট জন:</label>
            <input type="number" className="border px-4 py-2 rounded w-24 text-center" placeholder="যেমন: ৫" value={people || ''} onChange={e => setPeople(Number(e.target.value))} min={1} />
            <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded shadow">ব্যয় হিসাব করুন</button>
          </form>
        )}

        {/* Animated Result */}
        {result.length > 0 && (
          <motion.ul
            className="mt-8 space-y-2 bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-gray-800 dark:to-gray-900 rounded p-4 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {result.map((r, i) => (
              <motion.li
                key={i}
                className="text-lg font-bold text-indigo-700 dark:text-indigo-200 animate-pulse"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {r}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
}
