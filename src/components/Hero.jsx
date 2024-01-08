import HeroImg from "/assets/hero-image.png"
import Button from "./Button"

const Hero = () => {
	return (
		<div className="flex flex-col md:flex-row w-full items-center justify-evenly px-8 lg:px-32 mt-40">
			<div>
				<h2 className="font-bold text-2xl">Plan your trip now</h2>
				<h1 className="text-4xl font-extrabold w-4/5 lg:text-5xl">Save <span className="hover:scale-125 duration-500 text-orange-600 font-extrabold inline-block">big</span> with our car rentals</h1>
				<p className="text-sm mt-4 max-w-md"> Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more</p>
				<div className="flex gap-4 mt-4">
					<Button text="Book Ride" bgcol="bg-orange-600" shdcol="shadow-orange-500" fontcol="text-white" />
					<Button text="Learn More" bgcol="bg-black" shdcol="bg-black" fontcol="text-white" />
				</div>
			</div>
			<div>
				<img className="mt-8 md:mt-0" src={HeroImg}></img>
			</div>
		</div>
	)
}

export default Hero