// import { Routes, Route, HashRouter } from "react-dom"
import {RouterProvider} from 'react-router-dom';
import './App.css';
import { appRouter } from './AppRouter';
import { Provider } from 'react-redux';
import { store } from './AppStore';

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={appRouter()} />
		</Provider>
	);
}

export default App;
