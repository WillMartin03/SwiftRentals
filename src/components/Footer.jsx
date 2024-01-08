import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'

const Footer = () => {
	return (
		<div className='pb-2 md:pb-8'>
			<div className='grid md:grid-cols-4 px-6 md:px-12 lg:px-24'>
				<div className='flex flex-col gap-2 font-semibold mb-6 md:mb-0'>
					<div>
						<h2 className='text-2xl font-bold mb-2'>Swiftride Rentals</h2>
						<p className='w-2/3'>We offer a wide range of vehicles for all of your driving needs. We guarantee you will find the perfect car to meet your needs</p>
						<a href="tel:1234567890" className='flex flex-row items-center gap-1 font-bold'><AiFillPhone />(123) 456-7890</a>
						<a href="mailto:contact@swiftriderentals.com" className='flex flex-row items-center gap-1 font-bold'><MdEmail />contact@swiftriderentals.com</a>
					</div>
				</div>
				<div className='flex flex-col gap-2 font-semibold mb-6 md:mb-0'>
					<h2 className='font-bold text-2xl mb-2'>Company</h2>
					<a>New York</a>
					<a>Careers</a>
					<a>Mobile</a>
					<a>Blog</a>
					<a>How we work</a>
				</div>
				<div className='flex flex-col gap-2 font-semibold mb-6 md:mb-0'>
					<h2 className='font-bold text-2xl mb-2'>Working Hours</h2>
					<p>Mon - Fri: 9:00AM - 9:00PM</p>
					<p>Sat: 9:00AM - 7:00PM</p>
					<p>Sun: Closed</p>
				</div>
				<div className='flex flex-col gap-2 font-semibold mb-6 md:mb-0'>
					<h2 className='text-2xl font-bold mb-2'>Subscription</h2>
					<p>Subscribe to our email list for the latest news and updates</p>
					<input type="text" className='text-center p-4 border-2 border-black ' placeholder='Enter your email address'></input>
					<button className='bg-orange-600 px-8 py-4 text-white shadow-md shadow-orange-600 font-bold hover:scale-105 hover:shadow-lg hover:shadow-orange-600 duration-300'>Subscribe</button>
				</div>
			</div>
		</div>
	)
}

export default Footer