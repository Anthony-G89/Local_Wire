var searchButton = $('#searchBtn');
var searchForm = $('#searchForm');
var closeForm = $('#closeForm');

searchButton.on('click', function() {
	console.log('hi');

	searchButton.hide();
	searchForm.show();
});

closeForm.on('click', function() {
	searchForm.hide();
	searchButton.show();
});
