import styled from 'styled-components';

const Col = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const ListsContainer = styled.div`
	display: flex;
`;

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 16px;
	height: 100vh;
	width: 100vw;
`;
const MessageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 400px;
	margin-bottom: 16px;
`;

export { Col, ListsContainer, Main, MessageContainer };
