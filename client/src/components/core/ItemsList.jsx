import { v4 as uuidv4 } from 'uuid';

import { StyledList } from './styled';
import Item from './Item';

const ItemsList = ({ items, handleClick }) => {
	return (
		<StyledList>
			{items.map((item) => (
				<Item key={uuidv4()} item={item} handleClick={handleClick} />
			))}
		</StyledList>
	);
};

export default ItemsList;
