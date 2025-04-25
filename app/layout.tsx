import { inter } from "./ui/fonts";
import "@/app/ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
      <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Acme Corporation. All rights reserved.</p>
          <p>
        <a href="/privacy-policy" className="text-blue-400">
          Privacy Policy
        </a>
          </p>
          <p>
        <a href="/terms-of-service" className="text-blue-400">
          Terms of Service
        </a>
          </p>
        </div>
      </footer>
    </html>
  );
}
