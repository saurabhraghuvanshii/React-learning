const ProfilePicture = () => {
	const imageUrl = "../src/assets/ss.jpg";
    const handleClick = (e) => e.target.style.display = "none";
    
	return (
		<>
			<div>ProfilePicture</div>
			<img onClick={(e) => handleClick(e)} src={imageUrl}></img>
		</>
	);
};

export default ProfilePicture;
