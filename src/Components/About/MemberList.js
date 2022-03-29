import React from 'react';
const MemberList = prop => {
	const { name, image, description, facebookUrl, linkedinUrl } = prop;
	return (
		<figure>
			<img src={image} alt={name} />
			<h1>{name}</h1>
			<p>{description}</p>
			<ul>
				<li>{facebookUrl}</li>
				<li>{linkedinUrl}</li>
			</ul>
		</figure>
	);
};

export default MemberList;
