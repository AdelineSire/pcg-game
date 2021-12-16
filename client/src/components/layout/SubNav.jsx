import { Splitter, StyledSubNav, ClassLink } from '../core/styled';

function SubNav() {
	return (
		<StyledSubNav>
			<Splitter>
				<ClassLink to='1'>1</ClassLink>
				<ClassLink to='2'>2</ClassLink>
				<ClassLink to='3'>3</ClassLink>
				<ClassLink to='4'>4</ClassLink>
			</Splitter>
			<Splitter>
				<ClassLink to='5'>5</ClassLink>
				<ClassLink to='6'>6</ClassLink>
				<ClassLink to='7'>7</ClassLink>
				<ClassLink to='8'>8</ClassLink>
			</Splitter>
		</StyledSubNav>
	);
}
export default SubNav;
