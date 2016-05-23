var React = require('react');
// Import non npm node modules
var ListItem = require('./ListItem.jsx');
// Dummy Data
var ingredients = [{
    "id": 1,
    "text": "ham"
}, {
    "id": 2,
    "text": "cheese"
}, {
    "id": 3,
    "text": "potatoes"
}];

// The list component
var List = React.createClass({
	render : function(){
		// Map the ingredients to the list item
		var listItems = ingredients.map(function(item){
			return <ListItem key={item.id} ingredients={item.text} />;
		});

		return ( <ul>{listItems}</ul> );
	}
});

// Export the module
module.exports = List;