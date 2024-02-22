import AboutDetails from '@/components/About/AboutDetails';
import AboutHero from '@/components/About/AboutHero';
import AboutSteps from '@/components/About/AboutSteps';
import ContactCard from '@/components/ContactCard';

export default function About() {
	return (
		<div
			className="flex xl:flex-row flex-col
			gap-5 relative z-0 max-w-[1440px]
			mx-auto"
		>
			<div
				className="mt-44 mb-9 sm:px-16 px-6
				border border-black rounded-3xl
				shadow-sm shadow-white text-center
				py-20 hover:shadow-primaryColor
				transition-all"
			>
				<AboutHero />
				<AboutDetails />
				<AboutSteps />
				<ContactCard />
			</div>
		</div>
	);
}
