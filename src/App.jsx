import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/auth-context';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';

function App() {
	return (
		<BrowserRouter>
			{/* <AuthContext.Provider value={{ authToken, updateToken }}> */}
			<Routes>
				<Route index element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/home' element={<Home />} />
			</Routes>
			{/* </AuthContext.Provider> */}
		</BrowserRouter>
	);
}

export default App;
