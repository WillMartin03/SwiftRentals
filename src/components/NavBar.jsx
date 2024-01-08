import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import Button from './Button'

const NavBar = () => {
	const [navBarToggled, setNavBarToggled] = useState(false)
	return (
		<div className="flex flex-row justify-between lg:justify-evenly py-6 px-8 items-center font-bold">
			<h1 className="text-2xl hover:scale-105 duration-500">Swiftride Rentals</h1>
			<ul className="hidden md:flex gap-4">
				<li>Home</li>
				<li>Rent</li>
				<li>Contact</li>
				<li>Reviews</li>
			</ul>
			<div className="hidden md:flex gap-4">
				<button>Sign In</button>
				<Button text="Register" bgcol="bg-orange-600" shdcol="shadow-orange-500" fontcol="text-white" />
			</div>
			<div className="md:hidden flex items-center z-50">
				{navBarToggled ? <FaTimes size={30} onClick={() => setNavBarToggled(!navBarToggled)} /> : <FaBars size={30} onClick={() => setNavBarToggled(!navBarToggled)} />}
			</div>
			{navBarToggled &&
				<div className='fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center'>
					<ul className='flex flex-col gap-4 text-2xl text-center font-semibold'>
						<li>Home</li>
						<li>Rent</li>
						<li>Contact</li>
						<li>Reviews</li>
					</ul>
				</div>
			}
		</div>
	)
}

export default NavBar