import styled from 'styled-components';

const StyledMessage = styled.span`
	color: ${(props) => props.color};
`;

function Message({ messageType }) {
	let message;
	let color;
	if (messageType === 'wrong') {
		message = 'Mauvaise colonne';
		color = '#071e3d';
	}
	if (messageType === 'won') {
		message = 'Gagné :)';
		color = '#73af96';
	}
	if (messageType === 'lost') {
		message = 'perdu :(';
		color = '#9b1d14';
	}

	return <StyledMessage color={color}>{message}</StyledMessage>;
}

export default Message;
