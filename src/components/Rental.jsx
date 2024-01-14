import { Link } from 'react-router-dom'
import { useCarContext, carRentals } from './CarContext'

const Rental = () => {
	const { selectedCar, selectCar } = useCarContext();

	const setSelectedCar = (car) => {
		selectCar(car);
	};

	return (
		<div className="flex flex-col items-center w-full mt-20 md:mt-56 font-bold">
			<div className="font-bold flex flex-col items-center justify-between">
				<h3 className="text-2xl">Vehicle Models</h3>
				<h2 className="text-4xl font-extrabold">Our Rental Fleet</h2>
				<h4 className="text-sm font-normal">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip!</h4>
			</div>
			<div className="grid md:grid-cols-3 gap-8 mt-8 justify-items-center">
				<div className="flex flex-col shadow-orange-600 font-bold">
					{carRentals.map((car) => {
						return (
							<button key={car.id} onClick={() => setSelectedCar(car)} className={selectedCar.id === car.id ? 'bg-orange-600 h-12 text-white text-left px-4 py-2 hover:scale-105 shadow-lg shadow-orange-600 duration-500' : 'text-left h-12 px-4 py-2 hover:scale-105 hover:text-white hover:bg-orange-600 duration-300 hover:shadow-lg hover:shadow-orange-600'}>{car.name}</button>
						)
					})}
				</div>
				{selectedCar && (
					<>
						<div className="flex items-center">
							<img className="px-8 md:px-0 w-[30rem] md:w-[40rem]" src={selectedCar.img} alt={selectedCar.make + " " + selectedCar.model} />
						</div>
						<div className="w-72 text-left flex flex-col">
							<div className="bg-orange-600 text-center text-white px-4 py-2 text-xl">
								<h2 className="text-3xl font-bold">{selectedCar.price} <span>/ per day</span></h2>
							</div>
							<table className="border-2 border-black">
								<tbody>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">Make:</th>
										<td className="font-normal">{selectedCar.make}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">Model:</th>
										<td className="font-normal">{selectedCar.model}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">Year:</th>
										<td className="font-normal">{selectedCar.year}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">Doors:</th>
										<td className="font-normal">{selectedCar.doors}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">AC:</th>
										<td className="font-normal">{selectedCar.ac}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">Transmission:</th>
										<td className="font-normal">{selectedCar.transmission}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">Fuel:</th>
										<td className="font-normal">{selectedCar.fuel}</td>
									</tr>
								</tbody>
							</table>
							<Link to='/reserve'><button className='mt-4 w-full bg-orange-600 py-2 text-white text-xl font-bold hover:scale-105 duration-500 shadow-md shadow-orange-600 hover:shadow-lg hover:shadow-orange-600'>Reserve Now</button></Link>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Rental