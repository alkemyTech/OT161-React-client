import React, { useEffect, useState } from 'react';
import { getDataMethod } from '../../Services/publicApiService';
import MemberList from './MemberList';

const Members = () => {
	const [members, setMembers] = useState([]);

	const getMembers = async () => {
		const data = await getDataMethod('members');
		console.log('data:', data.data.data);
		setMembers(data.data.data);
	};

	useEffect(() => {
		getMembers();
	}, []);

	return (
		<>
			{members.map(el => (
				<MemberList
					key={el.id}
					image={el.image}
					name={el.name}
					description={el.description}
					facebookUrl={el.facebookUrl}
					linkedinUrl={el.linkedinUrl}
				/>
			))}
		</>
	);
};

export default Members;
