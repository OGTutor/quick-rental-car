import { FC } from 'react';
import { BiPhoneCall } from 'react-icons/bi';

const PHONE_NUMBER = '+1 233-000-2288';

const ContactButton: FC = () => {
	return (
		<div
			className="flex justify-center
			lg:justify-start hover:scale-105
			transition-all"
		>
			<a
				href={`tel:${PHONE_NUMBER}`}
				className="flex bold items-center
				max-ms:text-base max-sm:text-2xl text-md
				hover:text-primaryColor transition-all"
			>
				<BiPhoneCall />{' '}
				<span className="max-sm:ml-0 ml-3">{PHONE_NUMBER}</span>
			</a>
		</div>
	);
};

export default ContactButton;
