const MemberList = prop => {
	const { name, image, description, facebookUrl, linkedingUrl } = prop;
	return (
		<figure>
			<img src={image} alt={name} />
			<h1>{name}</h1>
			<p>{description}</p>
			<ul>
				<li>{facebookUrl}</li>
				<li>{linkedingUrl}</li>
			</ul>
		</figure>
	);
};

export default MemberList;
