import PropTypes from "prop-types";
const UserGreeting = (props) => {
	
    return(
        <>
        {props.isLoggedIn? <h2>mother fucker {props.username} how did you come here</h2>: <h2>goo bak nothing here</h2>}
        </>
    )
};

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

export default UserGreeting;
