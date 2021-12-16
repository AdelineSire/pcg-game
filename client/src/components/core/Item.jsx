import styled from 'styled-components';

const StyledItem = styled.button`
	all: unset;
	text-align: center;
	background-color: ${(props) => props.bgcolor};
	color: #071e3d;
	padding: 0.8em;
	margin: 0.4em;
	border-radius: 8px;
	cursor: pointer;
	opacity: ${(props) => props.opacity};
`;

function Item({ item, handleClick }) {
	let opacity;
	item.isVisible === true ? (opacity = 1) : (opacity = 0);
	let bgcolor;
	item.isSelected === true ? (bgcolor = '#fce188') : (bgcolor = '#6e8db6');

	return (
		// <div>
		<StyledItem
			opacity={opacity}
			bgcolor={bgcolor}
			onClick={() => handleClick(item)}
		>
			{item.value}
		</StyledItem>
		// </div>
	);
}

export default Item;
