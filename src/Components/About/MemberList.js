import React from 'react';
const MemberList = prop => {
	const { name, image, description, facebookUrl, linkedinUrl } = prop;
	return (
		<div>
			<img src={image} alt={name} />
			<h1>{name}</h1>
			<div dangerouslySetInnerHTML={{ __html: `<p>${description}</p>` }}></div>
			<div>
				<ul>
					<li>{facebookUrl}</li>
					<li>{linkedinUrl}</li>
				</ul>
			</div>
		</div>
	);
};

export default MemberList;
