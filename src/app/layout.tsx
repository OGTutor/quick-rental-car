import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import {
	ClerkProvider,
	RedirectToSignIn,
	SignedIn,
	SignedOut,
} from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Single_Day } from 'next/font/google';
import './globals.css';

const inter = Single_Day({ weight: '400' });

export const metadata: Metadata = {
	title: 'Quick Rental Car',
	description: 'Discover the best cars in the world.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" className="h-full">
				<body className={`${inter.className} relative`}>
					<SignedIn>
						<header className="w-full absolute z-10">
							<Navbar />
						</header>
						<main className="overflow-hidden">
							<div>{children}</div>
						</main>
						<footer
							className="w-full flex flex-col
							text-white mt-5 border-t-[1px]
							border-primaryColor shadow-sm
							shadow-primaryColor
							rounded-t-lg 3xl:rounded-t-full"
						>
							<Footer />
						</footer>
					</SignedIn>
					<SignedOut>
						<RedirectToSignIn />
					</SignedOut>
				</body>
			</html>
		</ClerkProvider>
	);
}
