export default function Footer() {
  return (
    <footer className="relative border-t border-gray-line px-6 md:px-10 py-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-gray text-xs font-mono tracking-wide">
        <p>© 2026 Aaron Bryan Rollorata. All rights reserved.</p>
        <p>
          Built with <span className="text-red-accent">Next.js</span> + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
