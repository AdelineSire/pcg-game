import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import Short from './components/pages/Short';
import Base from './components/pages/Base';
import Board from './components/core/Board';
import Instruction from './components/core/Instruction';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='short' element={<Short />}>
					<Route index element={<Instruction />} />
					<Route path=':id' element={<Board system={'short'} />} />
				</Route>
				<Route path='base' element={<Base />}>
					<Route index element={<Instruction />} />
					<Route path=':id' element={<Board system={'base'} />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
