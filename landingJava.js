var searchButton = $('#searchBtn');
var searchForm = $('#searchForm');
var closeForm = $('#closeForm');

searchButton.on('click', function(e) {
	console.log('hi');
	e.preventDefault();

	searchButton.hide();
	searchForm.show();
});

closeForm.on('click', function() {
	searchForm.hide();


});
