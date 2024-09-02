import Link from "next/link";

export const Paragraph = () => {
  return (
    <div className="flex gap-20 items-center">
      <a href="./">Home</a>

      <a href="./blog-list">Blog</a>

      <a href="contact-us">Contact</a>
    </div>
  );
};
