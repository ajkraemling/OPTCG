import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./styles/globals.css";
import {Auth0Provider} from "@auth0/nextjs-auth0";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "OPTCG",
    description: "One Piece Trading Card Game Simulator",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link
                rel="preload"
                href="/fonts/one-piece-font.ttf"
                as="font"
                type="font/ttf"
                crossOrigin="anonymous"
            />
            <title>OPTCG Sim</title>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Auth0Provider>
            {children}
        </Auth0Provider>
        </body>
        </html>
    );
}

