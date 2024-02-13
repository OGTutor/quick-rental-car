'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import { toast } from 'react-toastify';
import SearchManufacturer from './SearchManufacturer';
import SearchButton from './ui/SearchButton';

const SearchBar: FC = () => {
	const router = useRouter();
	const [manufacturer, setManufacturer] = useState<string>('');
	const [model, setModel] = useState<string>('');

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (manufacturer === '' && model === '') {
			toast.error('Please fill in the search bar!', {
				position: 'top-center',
				theme: 'dark',
				className: `rounded-3xl shadow-sm
							shadow-white
							hover:shadow-primaryColor
							hover:shadow-md p-3`,
			});
			return;
		}

		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
	};

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);

		if (model) {
			searchParams.set('model', model);
		} else {
			searchParams.delete('model');
		}

		if (manufacturer) {
			searchParams.set('manufacturer', manufacturer);
		} else {
			searchParams.delete('manufacturer');
		}

		const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

		router.push(newPathname);
	};

	return (
		<form
			className="flex items-center
			justify-start max-sm:flex-col
			w-full relative max-sm:gap-4
			max-w-3xl"
			onSubmit={handleSearch}
		>
			<div
				className="flex-1 max-sm:w-full
				flex justify-start items-center
				relative"
			>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<div
				className="flex-1 max-sm:w-full
				flex justify-start items-center
				relative"
			>
				<Image
					src="/images/model-icon.png"
					alt="car model"
					width={25}
					height={25}
					className="absolute w-[20px] h-[20px] ml-4"
				/>
				<input
					type="text"
					name="model"
					value={model}
					onChange={(e) => setModel(e.target.value)}
					placeholder="Model"
					className="w-full h-[48px] pl-12 p-4
					bg-black rounded-r-full
					max-sm:rounded-full outline-none
					cursor-pointer text-xl shadow-sm shadow-white"
				/>
				<SearchButton otherClasses="sm:hidden" />
			</div>
			<SearchButton otherClasses="max-sm:hidden" />
		</form>
	);
};

export default SearchBar;
