import React from 'react';
const MemberList = prop => {
	const { name, image, description, facebookUrl, linkedinUrl } = prop;
	return (
		<figure>
			<img src={image} alt={name} />
			<h1>{name}</h1>
			<div dangerouslySetInnerHTML={{ __html: `<p>${description}</p>` }}></div>
			<div>
				<ul>
					<li>{facebookUrl}</li>
					<li>{linkedinUrl}</li>
				</ul>
			</div>
		</figure>
	);
};

export default MemberList;
