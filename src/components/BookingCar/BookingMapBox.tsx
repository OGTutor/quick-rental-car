'use client';

import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import Map, { Marker } from 'react-map-gl';

const BookingMapBox: FC = () => {
	const [userLocation, setUserLocation] = useState<any>();

	useEffect(() => {
		getUserLocation();
	}, [userLocation]);

	const getUserLocation = () => {
		navigator.geolocation.getCurrentPosition(function (pos) {
			setUserLocation({
				lat: pos.coords.latitude,
				lng: pos.coords.longitude,
			});
		});
	};

	return (
		<>
			{userLocation ? (
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
						<Image
							src="/images/pin.png"
							width={40}
							height={40}
							alt="Location Pin"
						/>
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
