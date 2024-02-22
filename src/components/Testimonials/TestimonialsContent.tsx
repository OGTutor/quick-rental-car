import { FC } from 'react';
import ContactCard from '../ContactCard';
import ReviewCard from './ui/ReviewCard';

interface Testimonials {
	title: string;
	image: string;
	name: string;
	city: string;
}

interface TestimonialsContentProps {
	testimonials: Testimonials[];
}

const TestimonialsContent: FC<TestimonialsContentProps> = ({
	testimonials,
}) => {
	return (
		<>
			<h2
				className="2xl:text-[72px]
				sm:text-[64px] text-[50px]
				font-extrabold text-white"
			>
				<span className="text-primaryColor animate-pulse">
					Reviewed
				</span>{' '}
				by People
			</h2>
			<h1 className="text-4xl bold my-3">
				Client`s{' '}
				<span className="text-primaryColor animate-pulse">
					Testimonials
				</span>
			</h1>
			<p className="text-2xl text-white">
				Discover the positive impact we`ve made on the our clients by
				reading through their testimonials. Our clients have experienced
				our service and results, and they`re eager to share their
				positive experiences with you.
			</p>
			<div className="flex flex-wrap justify-center my-10">
				{testimonials.map((testimonial, idx) => (
					<ReviewCard key={idx} {...testimonial} />
				))}
			</div>
			<ContactCard />
		</>
	);
};

export default TestimonialsContent;
