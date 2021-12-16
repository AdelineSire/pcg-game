import { Outlet } from 'react-router';

import { Main } from '../core/styled';
import Navbar from './Navbar';

function Layout() {
	return (
		<Main>
			<Navbar />
			<Outlet />
		</Main>
	);
}

export default Layout;
