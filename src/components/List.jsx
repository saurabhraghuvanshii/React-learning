import PropTypes from "prop-types";

const List = (props) => {
	const category = props.category;
	const itemList = props.items;

	// const fruits = [
	// 	{ id: 1, name: "apple", calories: 95 },
	// 	{ id: 2, name: "orange", calories: 98 },
	// 	{ id: 3, name: "banana", calories: 33 },
	// 	{ id: 4, name: "coconut", calories: 882 },
	// 	{ id: 5, name: "lundmera", calories: 87 },
	// ];

	//const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

	const listItems = itemList.map((item) => (
		<li key={item.id}>
			{item.name}: &nbsp; {item.calories}
		</li>
	));

	return (
		<div>
			<h3>{category}</h3>
			{listItems}
		</div>
	);
};

List.propTypes = {
	category: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			calories: PropTypes.number,
		})
	),
};

export default List;
