import Link from "next/link";

export const Paragraph = () => {
  return (
    <div className="flex gap-20 items-center ">
      <div className="flex items-center space-x-3 p-2   rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(72,187,255,0.8)]">
        <Link href="/">Home</Link>
      </div>
      <div className="flex items-center space-x-3 p-2   rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(72,187,255,0.8)]">
        <Link href="/blogs">Blog</Link>
      </div>
      <div className="flex items-center space-x-3 p-2  rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(72,187,255,0.8)]">
        <Link href="/contact-us">Contact</Link>
      </div>
    </div>
  );
};
