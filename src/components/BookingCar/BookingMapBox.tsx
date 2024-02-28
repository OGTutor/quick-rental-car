'use client';

import { useLocation } from '@/context/UserLocationContext';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';
import { FC, useCallback, useEffect, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import { toast } from 'react-toastify';

const BookingMapBox: FC = () => {
	const { location } = useLocation();
	const [userLocation, setUserLocation] = useState<any>();

	const getUserLocation = useCallback(async () => {
		if (location) {
			try {
				const response = await fetch(
					`https://api.mapbox.com/geocoding/v5/mapbox.places/
					${location}.json?access_token=
					${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
				);
				const data = await response.json();

				if (data.features && data.features.length > 0) {
					const [longitude, latitude] = data.features[0].center;

					setUserLocation({
						lng: longitude,
						lat: latitude,
					});
				} else {
					setTimeout(() => {
						toast.error('The address was not found!', {
							position: 'top-center',
							theme: 'dark',
							className: `rounded-3xl shadow-sm
							shadow-white
							hover:shadow-primaryColor
							hover:shadow-md p-3`,
						});
					}, 5000);

					console.error('No geocoding results');
				}
			} catch (error) {
				console.error('Error getting coordinates:', error);
			}
		} else {
			navigator.geolocation.getCurrentPosition(function (pos) {
				setUserLocation({
					lat: pos.coords.latitude,
					lng: pos.coords.longitude,
				});
			});
		}
	}, [location]);

	useEffect(() => {
		getUserLocation();
	}, [getUserLocation]);

	return (
		<>
			{userLocation || location ? (
				<Map
					mapboxAccessToken={
						process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
					}
					initialViewState={{
						longitude: userLocation?.lng,
						latitude: userLocation?.lat,
						zoom: 1,
					}}
					style={{
						position: 'relative',
						width: '100%',
						height: '387px',
						borderRadius: '24px',
					}}
					mapStyle="mapbox://styles/mapbox/dark-v11"
				>
					<Marker
						longitude={userLocation?.lng}
						latitude={userLocation?.lat}
						anchor="bottom"
					>
						<div className="relative h-10 w-10">
							<Image
								src="/images/pin.png"
								sizes="10px 10px"
								fill
								alt="Location Pin"
							/>
						</div>
					</Marker>
				</Map>
			) : (
				<Map
					mapboxAccessToken={
						process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
					}
					initialViewState={{
						longitude: -122.4,
						latitude: 37.8,
						zoom: 1,
					}}
					style={{
						position: 'relative',
						width: '100%',
						height: '387px',
						borderRadius: '24px',
					}}
					mapStyle="mapbox://styles/mapbox/dark-v11"
				/>
			)}
		</>
	);
};

export default BookingMapBox;
