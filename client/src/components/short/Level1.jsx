import { useState, useEffect } from 'react';

import ItemsList from '../core/ItemsList';
import Message from '../core/Message';
import { Main, ListsContainer, MessageContainer } from '../core/styled';

import { getLevel1 } from '../../services/api';
import getAccoutFromValue from '../../lib/getAccountFromValue';

function Level1() {
	const [isLoading, setIsLoading] = useState(true);
	const [accounts, setAccounts] = useState();
	const [ids, setIds] = useState();
	const [names, setNames] = useState();
	const [currentAccount, setCurrentAccount] = useState();
	const [messageType, setMessageType] = useState();

	useEffect(() => {
		async function fetchAccounts() {
			const response = await getLevel1();
			setAccounts(response.accounts);
			setIds(response.ids);
			setNames(response.names);
			setIsLoading(false);
		}
		fetchAccounts();
	}, []);

	const setItemAsSelected = (item) => {
		// Si le type de l'item est number
		if (typeof item.value === 'number') {
			// console.log('check for item type', typeof item.value);
			const newArray = ids.map((id) =>
				id.value === item.value
					? { isSelected: true, isVisible: true, value: id.value }
					: id
			);
			// console.log('newArray', newArray);
			setIds(newArray);
		}
		// Si le type de l'item est string
		if (typeof item.value === 'string') {
			// console.log('check for item type', typeof item.value);
			const newArray = names.map((name) =>
				name.value === item.value
					? { isSelected: true, isVisible: true, value: name.value }
					: name
			);
			// console.log('newArray', newArray);
			setNames(newArray);
		}
	};

	const setItemAsNotVisible = (item) => {
		if (typeof item.value === 'number') {
			const newIds = ids.map((id) =>
				id.value === item.value
					? { isSelected: false, isVisible: false, value: id.value }
					: id
			);
			setIds(newIds);
			const newNames = names.map((name) =>
				name.value === currentAccount.account.name
					? { isSelected: false, isVisible: false, value: name.value }
					: name
			);
			setNames(newNames);
		} else {
			const newNames = names.map((name) =>
				name.value === item.value
					? { isSelected: false, isVisible: false, value: name.value }
					: name
			);
			setNames(newNames);

			const newIds = ids.map((id) =>
				id.value === currentAccount.account._id
					? { isSelected: false, isVisible: false, value: id.value }
					: id
			);
			setIds(newIds);
		}
	};

	const resetItem = (item) => {
		if (typeof item.value === 'number') {
			const newNames = names.map((name) =>
				name.value === currentAccount.account.name
					? { isSelected: false, isVisible: true, value: name.value }
					: name
			);
			setNames(newNames);
		} else {
			const newIds = ids.map((id) =>
				id.value === currentAccount.account._id
					? { isSelected: false, isVisible: true, value: id.value }
					: id
			);
			setIds(newIds);
		}
	};

	const handleClick = (item) => {
		const itemType = typeof item.value;
		if (currentAccount === undefined) {
			const account = getAccoutFromValue(item.value, accounts);
			setCurrentAccount({ item: item, account: account });
			setItemAsSelected(item);
		} else {
			if (itemType === typeof currentAccount.item.value) {
				setMessageType('wrong');
				setTimeout(function () {
					setMessageType();
				}, 1000);
			} else {
				const itemKey = itemType === 'string' ? 'name' : '_id';
				if (item.value === currentAccount.account[itemKey]) {
					setItemAsNotVisible(item);
					setCurrentAccount();
					setMessageType('won');
					setTimeout(function () {
						setMessageType();
					}, 1000);
				} else {
					resetItem(item);
					setCurrentAccount();
					setMessageType('lost');
					setTimeout(function () {
						setMessageType();
					}, 1000);
				}
			}
		}
	};

	return (
		<div>
			{isLoading ? (
				<p>Chargement</p>
			) : (
				<Main>
					<MessageContainer>
						<Message messageType={messageType} />
					</MessageContainer>

					<ListsContainer>
						<ItemsList items={ids} handleClick={handleClick} />
						<ItemsList items={names} handleClick={handleClick} />
					</ListsContainer>
				</Main>
			)}
		</div>
	);
}

export default Level1;
