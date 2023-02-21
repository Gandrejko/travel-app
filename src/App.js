
import {Routes, Route, Navigate} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";
import {Bookings} from "./pages/Bookings";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {Trip} from "./pages/Trip";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/bookings' element={<Bookings />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path="/trip/:tripId" element={<Trip />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
