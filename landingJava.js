$(document).ready(function () {


	var searchButton = $('#searchBtn');
	var searchForm = $('#searchForm');
	var closeForm = $('#closeForm');

	searchButton.on('click', function (e) {
		e.preventDefault();
		console.log('hi');

		searchButton.hide();
		searchForm.show();
	});

	closeForm.on('click', function () {
		searchForm.hide();
		searchButton.show();
	});

});
