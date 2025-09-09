export default function Footer() {
  return (
    <footer className="bg-black/50 text-center text-white py-6 mt-12 border-t border-white/10">
      <p>© {new Date().getFullYear()} Tafseer Anees | Graphics Designer</p>
      <div className="mt-2">
        <a
          href="https://instagram.com/taf_seer_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 underline mx-2"
        >
          @taf_seer_
        </a>
        |
        <a
          href="mailto:tafseermalik510@gmail.com"
          className="text-pink-400 underline mx-2"
        >
          tafseermalik510@gmail.com
        </a>
      </div>
    </footer>
  );
}