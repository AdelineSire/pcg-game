import styled from 'styled-components';
import { PageContainer } from '../core/styled';

const H1 = styled.h1`
	margin-top: 2em;
`;
const H2 = styled.h2`
	font-size: 1.2em;
	font-weight: normal;
`;
const Bold = styled.span`
	font-weight: 600;
`;
const Ol = styled.ol`
	text-align: left;
	margin-top: 3em;
`;
const Li = styled.li`
	margin-bottom: 1em;
	padding-left: 1em;
`;
function Home() {
	return (
		<PageContainer>
			<H1>Bienvenue :)</H1>
			<H2>
				Vous devez apprendre par coeur le <Bold>plan comptable général</Bold>?
			</H2>
			<H2>Vous trouvez que c'est difficile et ennuyeux ?</H2>
			<H2>
				<Bold>Rendons cela plus amusant !</Bold>
			</H2>
			<Ol>
				<Li>Sélectionnez un système</Li>
				<Li>Sélectionnez une classe</Li>
				<Li>
					<Bold>Jouez !</Bold>
				</Li>
			</Ol>
		</PageContainer>
	);
}

export default Home;
