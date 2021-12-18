import { PageContainer, SystemLink } from '../core/styled';

function NotFound() {
	return (
		<PageContainer>
			<h2>Vous êtes perdu :'(</h2>
			<SystemLink to='/'>Retour à l'accueil</SystemLink>
		</PageContainer>
	);
}

export default NotFound;
