import './App.css';
import Condicao from './components/exercises/Condicao';
import Navbar from './components/navbar/navbar';
import Welcome from './components/exercises/Welcome';

function App() {
	return (
		<>
			<Navbar />
			<Welcome nome="Welcome" />
			<Condicao />
			<Welcome
				className="text-3xl"
				nome="José Carlos Gonçalves..."
			/>
		</>
	);
}

export default App;
