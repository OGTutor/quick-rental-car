import TestimonialsContent from '@/components/Testimonials/TestimonialsContent';

const testimonials = [
	{
		title: `We rented a car from this
		website and had an amazing experience!
		The booking was easy and the rental
		rates were very affordable.`,
		image: '/images/avatar-1.jpg',
		name: 'Arthur Morgan',
		city: 'Macon',
	},
	{
		title: `The car was in great
		condition and made our trip
		even better. Highly recommend
		for this car rental website!`,
		image: '/images/avatar-2.jpg',
		name: 'Thanos Titan',
		city: 'Orlando',
	},
	{
		title: `A wonderful car. I guess
		I was lucky. Despite the fact
		that I have a basic package,
		I don’t even have power windows.`,
		image: '/images/avatar-3.jpg',
		name: 'Tony Stark',
		city: 'Boston',
	},
	{
		title: `A good, proven company that
		I have contacted several times and
		have never let me down. Thank you,
		I will contact you again)`,
		image: '/images/avatar-4.jpg',
		name: 'Peter Parker',
		city: 'New York',
	},
	{
		title: `I have used car rental.
		The managers helped us choose
		a car and gave a discount on the
		second rental. I'm happy with
		the service)`,
		image: '/images/avatar-5.jpg',
		name: 'Heisenberg',
		city: 'Albuquerque',
	},
	{
		title: `Managers will promptly
		select a car, the cars are
		always well-maintained. I
		thank QUICK RENTAL for the
		car rental services provided.`,
		image: '/images/avatar-6.jpg',
		name: 'Michael',
		city: 'Bakersfield',
	},
];

export default function Testimonials() {
	return (
		<div
			className="flex flex-col
			gap-5 relative z-0 max-w-[1440px]
			mx-auto items-center justify-center
			md:justify-between"
		>
			<div
				className="mt-44 mb-9 sm:px-16 px-6
				border border-black rounded-3xl
				shadow-sm shadow-white text-center
				py-20 hover:shadow-primaryColor
				transition-all"
			>
				<TestimonialsContent testimonials={testimonials} />
			</div>
		</div>
	);
}
