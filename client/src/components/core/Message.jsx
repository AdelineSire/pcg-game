import styled from 'styled-components';

const StyledMessage = styled.span`
	color: ${(props) => props.color};
	font-size: 2em;
	font-weight: bold;
`;

function Message({ messageType }) {
	let message;
	let color;
	if (messageType === 'wrong') {
		message = 'Mauvaise colonne';
		color = '#0c0c0c';
	}
	if (messageType === 'won') {
		message = 'Gagné !';
		color = '#10942c';
	}
	if (messageType === 'lost') {
		message = 'Perdu !';
		color = '#9b1d14';
	}

	return <StyledMessage color={color}>{message}</StyledMessage>;
}

export default Message;
