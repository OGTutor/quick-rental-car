'use client';

import { createContext, useContext, useState } from 'react';

interface UserLocationProviderProps {
	children: React.ReactNode;
}

interface UserLocationContextType {
	location: string;
	updateLocation: (newLocation: string) => void;
}

const UserLocationContext = createContext<UserLocationContextType | undefined>(
	undefined
);

export const UserLocationProvider = ({
	children,
}: UserLocationProviderProps) => {
	const [location, setLocation] = useState('');

	const updateLocation = (newLocation: string) => {
		setLocation(newLocation);
	};

	return (
		<UserLocationContext.Provider value={{ location, updateLocation }}>
			{children}
		</UserLocationContext.Provider>
	);
};

export const useLocation = () => {
	const context = useContext(UserLocationContext);
	if (!context) {
		throw new Error(
			'useLocation must be used within a UserLocationProvider'
		);
	}

	return context;
};
