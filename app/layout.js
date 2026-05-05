import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://abids.tech";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Abid Shaikh — Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack, AI integration, and production-ready web applications. Building scalable, user-friendly products.",
  keywords: [
    "Abid Shaikh",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "MongoDB",
    "AI Integration",
    "Web Developer India",
    "Portfolio",
    "Thane",
    "Mumbai University",
  ],
  authors: [{ name: "Abid Shaikh", url: "https://github.com/Abid-sh84" }],
  creator: "Abid Shaikh",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Abid Shaikh — Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, AI integration, and production-ready web applications.",
    siteName: "Abid Shaikh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abid Shaikh — Full Stack Developer",
    description: "Full Stack Developer | MERN Stack | AI Integration",
    creator: "@AbidShaikh550",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification token here:
    // google: "your-google-verification-token",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="CyYTp5fhSZXsYxieb5SH-4WDADdzZtSmdF8A8-Hj05k" />
        {/* JSON-LD Structured Data — Person schema for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abid Shaikh",
              url: SITE_URL,
              image: `${SITE_URL}/abid-img.png`,
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer specializing in MERN stack, AI integration, and production-ready web applications.",
              email: "muhammadabid9326@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Thane",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/Abid-sh84",
                "https://www.linkedin.com/in/shkabid40/",
                "https://x.com/AbidShaikh550",
              ],
              knowsAbout: [
                "JavaScript",
                "React.js",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "REST APIs",
                "AI Integration",
                "Full Stack Development",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Mumbai University",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
