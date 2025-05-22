const tips = [
  {
    title: '৫০/৩০/২০ নিয়ম',
    content: 'আপনার আয়ের ৫০% প্রয়োজনীয় খরচ, ৩০% ইচ্ছেমতো খরচ, ২০% সঞ্চয় করুন।',
    tooltip: 'বাজেটিংয়ের সহজ নিয়ম',
  },
  {
    title: 'জরুরি ফান্ড',
    content: 'কমপক্ষে ৩-৬ মাসের খরচের সমপরিমাণ টাকা আলাদা রাখুন।',
    tooltip: 'হঠাৎ বিপদের জন্য প্রস্তুতি',
  },
  {
    title: 'প্যাসিভ ইনকাম',
    content: 'বিনিয়োগ, অনলাইন ব্যবসা, বা রেন্টাল ইনকাম তৈরি করুন।',
    tooltip: 'অতিরিক্ত আয়',
  },
];

export default function MoneyManagementPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">স্মার্ট মানি ম্যানেজমেন্ট গাইড</h2>
      <div className="space-y-4">
        {tips.map((tip, i) => (
          <details key={i} className="bg-white dark:bg-gray-800 rounded shadow p-4 group">
            <summary className="font-semibold cursor-pointer flex items-center gap-2">
              {tip.title}
              <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded" title={tip.tooltip}>ℹ️</span>
            </summary>
            <div className="mt-2 text-gray-700 dark:text-gray-200">{tip.content}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
