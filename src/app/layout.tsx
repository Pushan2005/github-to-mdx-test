import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="flex flex-col">
                    <div className="w-screen border-2 p-4">
                        Placeholder Task bar
                    </div>
                    <div className="flex">
                        <div className="flex flex-col gap-4 p-4 border-2">
                            <h1>Placeholder Sidebar</h1>
                            {Array.from({ length: 10 }, (_, i) => (
                                <p key={i}>les francais sont nuls</p>
                            ))}
                        </div>
                        <div className="">{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}
