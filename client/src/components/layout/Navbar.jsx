import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { Nav, IconLink, SystemLink } from '../core/styled';

function Navbar() {
	return (
		<Nav>
			<SystemLink to='/short'>Système abrégé</SystemLink>
			<IconLink to='/'>
				<FontAwesomeIcon icon={faHome} />
			</IconLink>
			<SystemLink to='/base'>Système de base</SystemLink>
		</Nav>
	);
}

export default Navbar;
