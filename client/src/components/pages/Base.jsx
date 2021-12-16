import { Outlet } from 'react-router-dom';
import { PageContainer } from '../core/styled';
import SubNav from '../layout/SubNav';

function Base() {
	return (
		<PageContainer>
			<SubNav />
			<Outlet />
		</PageContainer>
	);
}

export default Base;
