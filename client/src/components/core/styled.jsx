import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ClassLink = styled(NavLink)`
	color: white;
	text-decoration: none;
	background-color: #071e3d;
	padding: 0.4em 1.4em;
	margin: 0.4em;
	&.active {
		color: red;
	}
`;

const ColLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: space-between;
	margin-right: 24px;
`;

const ColRight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: right;
	justify-content: space-between;
	margin-left: 24px;
`;

const IconLink = styled(NavLink)`
	font-size: 16px;
	color: white;
	background-color: #071e3d;
	padding: 1em;
	margin-left: 0.4em;
	margin-right: 0.4em;
	&.active {
		color: red;
	}
`;

const ListsContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 0.2em;
	width: 100vw;
`;

const Main = styled.main`
	background-color: #f5eeee;
	min-height: 100vh;
`;

const MessageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 1em;
	width: 400px;
`;

const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 0.8em;
`;

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const Splitter = styled.div`
	display: flex;
`;

const StyledList = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledSubNav = styled.nav`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 1em;
`;

const SystemLink = styled(NavLink)`
	color: white;
	text-decoration: none;
	text-align: center;
	background-color: #071e3d;
	padding: 0.6em;
	margin-left: 0.4em;
	margin-right: 0.4em;

	&.active {
		color: red;
	}
`;

export {
	ClassLink,
	ColLeft,
	ColRight,
	IconLink,
	ListsContainer,
	Main,
	MessageContainer,
	Nav,
	PageContainer,
	Splitter,
	StyledList,
	StyledSubNav,
	SystemLink,
};
