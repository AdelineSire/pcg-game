import { Main, SystemLink } from '../core/styled';

function NotFound() {
	return (
		<Main>
			<h2>Vous êtes perdu :'(</h2>
			<SystemLink to='/'>Retour à l'accueil</SystemLink>
		</Main>
	);
}

export default NotFound;
