import { v4 as uuidv4 } from 'uuid';

import Item from './Item';
import { Col } from './styled';

const ItemsList = ({ items, handleClick }) => {
	return (
		<Col>
			{items.map((item) => (
				<Item key={uuidv4()} item={item} handleClick={handleClick} />
			))}
		</Col>
	);
};

export default ItemsList;
