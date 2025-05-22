
// Server Component fallback for SectionCard (no animation)
import { ReactNode } from 'react';

export default function SectionCard({
  children,
  className = '',
  asChild = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  [key: string]: any;
}) {
  if (asChild) {
    // asChild=true হলে, children-কে সরাসরি রেন্ডার করুন (section নয়)
    return children;
  }
  return (
    <section className={`rounded-2xl shadow-xl bg-white/60 dark:bg-gray-800/70 backdrop-blur-md p-6 md:p-10 mb-8 ${className}`} {...props}>
      {children}
    </section>
  );
}
