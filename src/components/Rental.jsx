import { useState } from "react"

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
		<div>
			<div className="font-bold flex flex-col items-center">
				<h3 className="text-2xl">Vehicle Models</h3>
				<h2 className="text-4xl">Our Rental Fleet</h2>
				<h4 className="text-sm font-normal">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip!</h4>
			</div>
			<div className="flex flex-row items-center mx-auto justify-between max-w-[1400px]">
				<div className="flex flex-col shadow-orange-600">
					<button className="hover:bg-orange-500 hover:scale-125 duration-500 hover:text-white" onClick={() => setSelectedVehicle({
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

					<button className="hover:bg-orange-500 hover:scale-125 duration-500 hover:text-white" onClick={() => setSelectedVehicle({
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

					<button className="hover:bg-orange-500 hover:scale-125 duration-500 hover:text-white" onClick={() => setSelectedVehicle({
						make: "Ford",
						model: "Focus",
						img: "/assets/ford_focus.png",
						year: "2023",
						price: "$30",
						doors: "4/5",
						ac: "Yes",
						transmission: "Automatic",
						fuel: "Gasoline"
					})}> Ford Focus</button>

					<button className="hover:bg-orange-500 hover:scale-125 duration-500 hover:text-white" onClick={() => setSelectedVehicle({
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

					<button className="hover:bg-orange-500 hover:scale-125 duration-500 hover:text-white" onClick={() => setSelectedVehicle({
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

					<button className="hover:bg-orange-500 hover:scale-125 duration-500 hover:text-white" onClick={() => setSelectedVehicle({
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
						<img src={vehicle.img} alt={vehicle.make + " " + vehicle.model} />
						<div>
							<div className="flex text-center items-center justify-center bg-orange-600 text-white text-2xl">
								<h2 className="text-3xl font-bold">{vehicle.price}</h2>
								<h2>/ per day</h2>
							</div>
							<table className="border-2 border-black">
								<tbody>
									<tr className="font-bold border-2 border-black">
										<th>Make:</th>
										<td className="font-normal">{vehicle.make}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th>Model:</th>
										<td className="font-normal">{vehicle.model}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th>Year:</th>
										<td className="font-normal">{vehicle.year}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th>Doors:</th>
										<td className="font-normal">{vehicle.doors}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th>AC:</th>
										<td className="font-normal">{vehicle.ac}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th>Transmission:</th>
										<td className="font-normal">{vehicle.transmission}</td>
									</tr>
									<tr className="font-bold border-2 border-black">
										<th>Fuel:</th>
										<td className="font-normal">{vehicle.fuel}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Rental