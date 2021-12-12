import styled from 'styled-components';

const StyledItem = styled.button`
	all: unset;
	text-align: center;
	background-color: ${(props) => props.bgcolor};
	color: #023047;
	padding: 8px;
	margin: 8px;
	border-radius: 8px;
	min-width: 30px;
	cursor: pointer;
	opacity: ${(props) => props.opacity};
`;

function Item({ item, handleClick }) {
	let opacity;
	item.isVisible === true ? (opacity = 1) : (opacity = 0);
	let bgcolor;
	item.isSelected === true ? (bgcolor = '#dae448') : (bgcolor = '#48cae4');

	return (
		<div>
			<StyledItem
				opacity={opacity}
				bgcolor={bgcolor}
				onClick={() => handleClick(item)}
			>
				{item.value}
			</StyledItem>
		</div>
	);
}

export default Item;
