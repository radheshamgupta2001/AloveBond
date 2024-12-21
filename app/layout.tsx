import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";

// Import Google Fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Regular, Medium, Bold
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular, Bold
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "AloveBond",
  description:
    "AloveBond is your emotional well-being companion, providing tools like mood tracking, journaling, and personalized mental health tips. Designed to help you embrace your emotional journey, build resilience, and foster mental health awareness. Join a supportive platform that empowers you to navigate life’s challenges and improve your emotional wellness.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
