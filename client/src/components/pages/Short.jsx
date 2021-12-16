import { Outlet } from 'react-router-dom';
import { PageContainer } from '../core/styled';
import SubNav from '../layout/SubNav';

function Short() {
	return (
		<PageContainer>
			<SubNav system={'short'} />
			<Outlet />
		</PageContainer>
	);
}

export default Short;
