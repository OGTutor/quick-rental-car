import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { FC } from 'react';
import { CarProps } from './CarCard';

interface CarDetailsProps {
	isOpen: boolean;
	closeModal: () => void;
	car: CarProps;
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
};

const CarDetails: FC<CarDetailsProps> = ({ car, closeModal, isOpen }) => {
	return (
		<>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={isOpen}
				onClose={closeModal}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={isOpen}>
					<Box sx={style}>
						<div className="relative max-ms:w-64 w-full max-w-lg max-h-[100vh] overflow-y-auto transform rounded-2xl bg-black p-6 text-left shadow-sm shadow-white transition-all flex flex-col gap-5">
							<button
								type="button"
								className="absolute top-2
							right-2 z-10 w-fit p-2
							bg-primaryColor rounded-full
							hover:bg-red-600
							hover:scale-105 transition-all"
								onClick={closeModal}
							>
								<Image
									src="/images/close.svg"
									alt="close"
									width={20}
									height={20}
									className="object-contain"
								/>
							</button>
							<div className="flex-1 flex flex-col gap-3">
								<div
									className="relative w-full h-40
								bg-pattern bg-cover
								bg-center rounded-3xl hover:scale-105 transition-all
								shadow-sm shadow-white hover:shadow-primaryColor hover:shadow-md"
								>
									<Image
										src="/images/heroSecond.png"
										className="object-contain"
										alt="car model"
										fill
										priority
										quality={100}
										draggable={false}
										unoptimized
									/>
								</div>
								<div className="flex gap-3">
									<div
										className="flex-1 relative
									w-full h-24 bg-black
									rounded-lg hover:scale-105 transition-all shadow-sm shadow-primaryColor hover:shadow-white hover:shadow-md bg-pattern bg-cover
								bg-center"
									>
										<Image
											src="/images/heroSecond.png"
											className="object-contain"
											alt="car model"
											fill
											priority
											quality={100}
											draggable={false}
											unoptimized
										/>
									</div>
									<div
										className="flex-1 relative
									w-full h-24 bg-black
									rounded-lg hover:scale-105 transition-all shadow-sm shadow-primaryColor hover:shadow-white hover:shadow-md bg-pattern bg-cover
								bg-center"
									>
										<Image
											src="/images/heroSecond.png"
											className="object-contain"
											alt="car model"
											fill
											priority
											quality={100}
											draggable={false}
											unoptimized
										/>
									</div>
									<div
										className="flex-1 relative
									w-full h-24 bg-black
									rounded-lg hover:scale-105 transition-all shadow-sm shadow-primaryColor hover:shadow-white hover:shadow-md bg-pattern bg-cover
								bg-center"
									>
										<Image
											src="/images/heroSecond.png"
											className="object-contain"
											alt="car model"
											fill
											priority
											quality={100}
											draggable={false}
											unoptimized
										/>
									</div>
								</div>
							</div>
							<div className="flex-1 flex flex-col gap-2">
								<Typography
									id="transition-modal-title"
									variant="h6"
									component="h2"
									className="text-primaryColor"
								>
									<h2 className="font-semibold max-sm:text-base text-xl capitalize">
										{car.make} {car.model}
									</h2>
									<div className="mt-3 flex flex-wrap gap-4 max-sm:text-xs text-xl">
										{Object.entries(car).map(
											([key, value]) => (
												<div
													className="flex justify-between gap-5 w-full text-right"
													key={key}
												>
													<h4 className="text-gray-400 capitalize">
														{key
															.split('_')
															.join(' ')}
													</h4>
													<p className="text-primaryColor font-semibold">
														{value}
													</p>
												</div>
											)
										)}
									</div>
								</Typography>
							</div>
						</div>
					</Box>
				</Fade>
			</Modal>
		</>
	);
};

export default CarDetails;
