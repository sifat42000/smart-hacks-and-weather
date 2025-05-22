"use client";
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white mt-4"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? 'ডার্ক মোড' : 'লাইট মোড'}
    </button>
  );
}
