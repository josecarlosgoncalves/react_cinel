import './App.css';
import Condicao from './components/Condicao';
import Welcome from './components/Welcome';

function App() {
	return (
		<>
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
