import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ItemsList from './ItemsList';
import Message from './Message';
import {
	PageContainer,
	ListsContainer,
	ColLeft,
	ColRight,
	MessageContainer,
} from './styled';

import { getShortClass, getBaseClass } from '../../services/api';
import getAccoutFromValue from '../../lib/getAccountFromValue';

function Board({ system }) {
	const [isLoading, setIsLoading] = useState(true);
	const [accounts, setAccounts] = useState();
	const [ids, setIds] = useState();
	const [names, setNames] = useState();
	const [currentAccount, setCurrentAccount] = useState();
	const [messageType, setMessageType] = useState();
	let params = useParams();
	let id = params.id;

	useEffect(() => {
		async function fetchAccounts(id, system) {
			let response;
			if (system === 'short') {
				response = await getShortClass(id);
			} else {
				response = await getBaseClass(id);
			}
			console.log('response in Board', response);
			setAccounts(response.accounts);
			setIds(response.ids);
			setNames(response.names);
			setIsLoading(false);
		}
		fetchAccounts(id, system);
	}, [id, system]);

	const setItemAsSelected = (item) => {
		if (typeof item.value === 'number') {
			const newArray = ids.map((id) =>
				id.value === item.value
					? { isSelected: true, isVisible: true, value: id.value }
					: id
			);
			setIds(newArray);
		}

		if (typeof item.value === 'string') {
			const newArray = names.map((name) =>
				name.value === item.value
					? { isSelected: true, isVisible: true, value: name.value }
					: name
			);
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
				<PageContainer>
					<MessageContainer>
						<Message messageType={messageType} />
					</MessageContainer>

					<ListsContainer>
						<ColLeft>
							<ItemsList items={names} handleClick={handleClick} />
						</ColLeft>
						<ColRight>
							<ItemsList items={ids} handleClick={handleClick} />
						</ColRight>
					</ListsContainer>
				</PageContainer>
			)}
		</div>
	);
}

export default Board;
