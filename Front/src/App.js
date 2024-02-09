import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import '../MysteryNumberMain.css';

import MysteryNumberMain from './Pages/MysteryNumberMain';

const App = () => {
	return <>
		<Router>

			<Routes>
				<Route path='/' element={<MysteryNumberMain />} />


			</Routes>

		</Router>

	</>;
}
export default App;

