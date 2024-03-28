import type { Metadata } from "next";
import { Inter, Kantumruy_Pro, Poppins } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/navbar/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";




// not yet complete such as font and metadta 

export const metadata: Metadata = {
  title: {
    template: "%s - MyShop",
    default: "MyShop",
  },
  description: "This is description shop",
  keywords: ["shop", "ecommerce", "sell"],
  openGraph: {
    title: {
      template: "%s - MyShop",
      default: "MyShop",
    },
    description: "This is description shop",
    images: [
      "https://i.pinimg.com/564x/45/27/97/452797ddc0ee24619a8af6963f52d09a.jpg",
    ],
  },
}


const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

const kantumruy_pro = Kantumruy_Pro({
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-kantumruy-pro",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${kantumruy_pro.className}`} >
        <NextUILayout>
          <NavbarComponent />
            
            {/* waiting data */}
           <Suspense fallback={<LoadingComponent/>} >

            <ErrorBoundary errorComponent={Error}>
            {children}
            </ErrorBoundary>
            
          </Suspense>
        </NextUILayout>
      </body>
    </html>
  );
}
