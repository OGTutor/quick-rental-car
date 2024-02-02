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
	description: 'Quick Rental Car',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" className="h-full">
				<body className={inter.className}>
					<main className="overflow-hidden">
						<SignedIn>
							<Navbar />
							<div>{children}</div>
						</SignedIn>
						<SignedOut>
							<RedirectToSignIn />
						</SignedOut>
					</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
