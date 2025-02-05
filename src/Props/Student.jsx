import PropTypes from 'prop-types'

const Student = (props) => {
	return (
		<div>
			{/* props are passed as key-value pair and int is in {} rember fucker  */}
			<p>Name: {props.name}</p>
			<p>age: {props.age}</p>
			<p>Student: {props.isStudent ? "yes" : "no"}</p>
		</div>
	);
};
 
// always used good for debugging .isRequired cann be use along it 
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

export default Student;
