import { useState } from "react"
import { Link } from 'react-router-dom'

const Rental = () => {
	const [vehicle, setSelectedVehicle] = useState({
		make: "Toyota",
		model: "Corolla",
		img: "/assets/toyota_corolla.png",
		year: "2023",
		price: "$25",
		doors: "4/5",
		ac: "Yes",
		transmission: "Automatic",
		fuel: "Gasoline"
	});

	return (
		<div className="flex flex-col items-center w-full mt-20 md:mt-56 font-bold">
			<div className="font-bold flex flex-col items-center justify-between">
				<h3 className="text-2xl">Vehicle Models</h3>
				<h2 className="text-4xl font-extrabold">Our Rental Fleet</h2>
				<h4 className="text-sm font-normal">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip!</h4>
			</div>
			<div className="grid md:grid-cols-3 gap-8 mt-8 justify-items-center">
				<div className="flex flex-col shadow-orange-600 font-bold">
					<button className={`px-4 py-2 h-12 hover:bg-orange-600 hover:scale-105 duration-500 hover:text-white ${vehicle.model === "Corolla" ? "bg-orange-600 text-white shadow-orange-500 shadow-lg" : ""}`} onClick={() => setSelectedVehicle({
						make: "Toyota",
						model: "Corolla",
						img: "/assets/toyota_corolla.png",
						year: "2023",
						price: "$25",
						doors: "4/5",
						ac: "Yes",
						transmission: "Automatic",
						fuel: "Gasoline"
					})}> Toyota Corolla</button>

					<button className={`px-4 py-2 h-12 hover:bg-orange-600 hover:scale-105 duration-500 hover:text-white ${vehicle.model === "Civic" ? "bg-orange-600 text-white shadow-orange-500 shadow-lg" : ""}`} onClick={() => setSelectedVehicle({
						make: "Honda",
						model: "Civic",
						img: "/assets/honda_civic.png",
						year: "2023",
						price: "$28",
						doors: "4/5",
						ac: "Yes",
						transmission: "Automatic",
						fuel: "Gasoline"
					})}> Honda Civic</button>

					<button className={`px-4 py-2 h-12 hover:bg-orange-600 hover:scale-105 duration-500 hover:text-white ${vehicle.model === "Focus" ? "bg-orange-600 text-white shadow-orange-500 shadow-lg" : ""}`} onClick={() => setSelectedVehicle({
						make: "Ford",
						model: "Focus",
						img: "/assets/ford_focus.webp",
						year: "2023",
						price: "$30",
						doors: "4/5",
						ac: "Yes",
						transmission: "Automatic",
						fuel: "Gasoline"
					})}> Ford Focus</button>

					<button className={`px-4 py-2 h-12 hover:bg-orange-600 hover:scale-105 duration-500 hover:text-white ${vehicle.model === "Jetta" ? "bg-orange-600 text-white shadow-orange-500 shadow-lg" : ""}`} onClick={() => setSelectedVehicle({
						make: "Volkswagen",
						model: "Jetta",
						img: "/assets/volkswagen_jetta.webp",
						year: "2023",
						price: "$35",
						doors: "4/5",
						ac: "Yes",
						transmission: "Automatic",
						fuel: "Gasoline"
					})}> Volkswagen Jetta </button>

					<button className={`px-4 py-2 h-12 hover:bg-orange-600 hover:scale-105 duration-500 hover:text-white ${vehicle.model === "Altima" ? "bg-orange-600 text-white shadow-orange-500 shadow-lg" : ""}`} onClick={() => setSelectedVehicle({
						make: "Nissan",
						model: "Altima",
						img: "/assets/nissan_altima.webp",
						year: "2012",
						price: "$40",
						doors: "4/5",
						ac: "Yes",
						transmission: "Manual",
						fuel: "Gasoline"
					})}> Nissan Altima </button>

					<button className={`px-4 py-2 h-12 hover:bg-orange-600 hover:scale-105 duration-500 hover:text-white ${vehicle.model === "3 Series" ? "bg-orange-600 text-white shadow-orange-500 shadow-lg" : ""}`} onClick={() => setSelectedVehicle({
						make: "BMW",
						model: "3 Series",
						img: "/assets/bmw_3_series.png",
						year: "2023",
						price: "$65",
						doors: "4/5",
						ac: "Yes",
						transmission: "Automatic",
						fuel: "Gasoline"
					})}> BMW 3 Series</button>
				</div>
				{vehicle && (
					<>
						<div className="flex items-center">
							<img className="px-8 md:px-0 w-[30rem] md:w-[40rem]" src={vehicle.img} alt={vehicle.make + " " + vehicle.model} />
						</div>
						<div className="w-72 text-left flex flex-col">
							<div className="bg-orange-600 text-center text-white px-4 py-2 text-xl">
								<h2 className="text-3xl font-bold">{vehicle.price} <span>/ per day</span></h2>
							</div>
							<table className="border-2 border-black">
								<tbody>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">Make:</th>
										<td className="font-normal">{vehicle.make}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">Model:</th>
										<td className="font-normal">{vehicle.model}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">Year:</th>
										<td className="font-normal">{vehicle.year}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">Doors:</th>
										<td className="font-normal">{vehicle.doors}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">AC:</th>
										<td className="font-normal">{vehicle.ac}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">Transmission:</th>
										<td className="font-normal">{vehicle.transmission}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th className="border-2 border-black w-1/2">Fuel:</th>
										<td className="font-normal">{vehicle.fuel}</td>
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