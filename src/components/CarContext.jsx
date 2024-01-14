import React, { useState, createContext } from 'react';

const carRentals = [
	{
		id: 1,
		img: '/assets/toyota_corolla.png',
		name: 'Toyota Corolla',
		make: 'Toyota',
		model: 'Corolla',
		year: '2023',
		doors: '4/5',
		ac: 'Yes',
		transmission: 'Automatic',
		fuel: 'Gasoline',
		price: '25'
	},
	{
		id: 2,
		img: '/assets/honda_civic.png',
		name: 'Honda Civic',
		make: 'Honda',
		model: 'Civic',
		year: '2023',
		doors: '4/5',
		ac: 'Yes',
		transmission: 'Automatic',
		fuel: 'Gasoline',
		price: '28'
	},
	{
		id: 3,
		img: '/assets/ford_focus.webp',
		name: 'Ford Focus',
		make: 'Ford',
		model: 'Focus',
		year: '2023',
		doors: '4/5',
		ac: 'Yes',
		transmission: 'Automatic',
		fuel: 'Gasoline',
		price: '30'
	},
	{
		id: 4,
		img: '/assets/volkswagen_jetta.webp',
		name: 'Volkswagen Jetta',
		make: 'Volkswagen',
		model: 'Jetta',
		year: '2023',
		doors: '4/5',
		ac: 'Yes',
		transmission: 'Automatic',
		fuel: 'Gasoline',
		price: '35'
	},
	{
		id: 5,
		img: '/assets/nissan_altima.webp',
		name: 'Nissan Altima',
		make: 'Nissan',
		model: 'Altima',
		year: '2012',
		doors: '4/5',
		ac: 'Yes',
		transmission: 'Manual',
		fuel: 'Gasoline',
		price: '40'
	},
	{
		id: 6,
		img: '/assets/bmw_3_series.png',
		name: 'BMW 3 Series',
		make: 'BMW',
		model: '3 Series',
		year: '2023',
		doors: '4/5',
		ac: 'Yes',
		transmission: 'Automatic',
		fuel: 'Gasoline',
		price: '65'
	}
]

const CarContext = createContext();

const CarProvider = ({ children }) => {
	const [selectedCar, setSelectedCar] = useState(carRentals[0]);

	const selectCar = (car) => {
		setSelectedCar(car);
	};

	return (
		<CarContext.Provider value={{ selectedCar, selectCar }}>
			{children}
		</CarContext.Provider>
	);
};

const useCarContext = () => {
	return React.useContext(CarContext);
};

export { CarProvider, useCarContext, carRentals };