import Image from "next/image";
import Link from "next/link";
import "../../styles/tailwind.css";
import "../../style.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo.PNG"
          width={100}
          height={100}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">Бөхчүүд</h1>
        </Link>
        <p className="text-slate-300">🤟 Манай блогт тавтай морил. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="bg-blue-500 text-white p-4">
        Tailwind ашиглаж nextjs дээр хийв.
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}