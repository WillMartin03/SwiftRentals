import HeroImg from "/assets/hero-image.png"
import Button from "./Button"

const Hero = () => {
	return (
		<div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-12 md:py-24">
			<div>
				<h2 className="font-bold text-md lg:text-2xl">Plan your trip now</h2>
				<h1 className="text-4xl font-extrabold w-4/5 lg:text-4xl">Save <span className="hover:scale-125 duration-500 text-orange-500 font-extrabold inline-block">big</span> with our car rentals</h1>
				<p className="text-sm mt-4 max-w-md lg:max-w-sm"> Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more</p>
				<div className="flex gap-4 mt-4">
					<Button text="Book Ride" bgcol="bg-orange-500" shdcol="shadow-orange-500" fontcol="text-white" />
					<Button text="Learn More" bgcol="bg-black" shdcol="bg-black" fontcol="text-white" />
				</div>
			</div>
			<img className="w-96 lg:w-1/2" src={HeroImg}></img>
		</div>
	)
}

export default Hero