import Hero from "./components/Hero"
import Rental from "./components/Rental"
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import WhyUs from "./components/WhyUs"
import Footer from "./components/Footer"
import Reserve from "./components/Reserve"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarProvider } from './components/CarContext'

function App() {
	return (
		<BrowserRouter>
			<CarProvider>
				<NavBar></NavBar>
				<Routes>
					<Route path='/' element={<><Hero /><Rental /></>}></Route>
					<Route path='/reserve' element={<Reserve />}></Route>
				</Routes>
				<Banner></Banner>
				<WhyUs></WhyUs>
				<Footer></Footer>
			</CarProvider>
		</BrowserRouter>
	)
}

export default App