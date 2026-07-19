import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white ">

      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/main-logo.jpg"
            alt="Cathly Shoppe Logo"
            width={50}
            height={50}
            className="rounded-full"
          />

          <span className="text-2xl font-bold">
            Cathly Shoppe
          </span>
        </Link>
        <p className="mt-4 text-gray-300">
          Apparel & Clothing | Thrifts & Collections
        </p>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 Cathly Shoppe. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}