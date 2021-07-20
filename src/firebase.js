// Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBHkE-qzohvzzfihM79_-6tRg4MjbeJqrA",
	authDomain: "md-aamroni-github.firebaseapp.com",
	projectId: "md-aamroni-github",
	storageBucket: "md-aamroni-github.appspot.com",
	messagingSenderId: "1038869437423",
	appId: "1:1038869437423:web:44f85c8749f7f22c3bb41a",
	measurementId: "G-1K6BMJZQZF"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Event Handling
$(document).ready(function () {

	// Add New Subscribers
	$(document).on('click', '[name="addNewSubscriber"]', function () {
		var newSubscriber = $('[name="subscriberEmail"]').val();

		if (newSubscriber) {
			firebase.database().ref('subscribers/' + "ID-" + Math.random().toString(16).slice(2)).set({
				email: newSubscriber,
				created: new Date().toLocaleString(),
				status: "Active"
			});

			$('[name="subscriberEmail"]').val('');
			$('[name="addNewSubscriber"]').attr('disabled', true).text('Thanks for Subcription');
			setTimeout(function () {
				$('[name="addNewSubscriber"]').attr('disabled', false).text('Subscribe');
				location.reload();
			}, 3000);
		}
	});

	// Add New Project Plan
	$(document).on('submit', '#projectSchemaForm', function (e) {
		e.preventDefault();
		var project = $(this).serializeArray();

		console.log(project);
		console.log(project[0]['value']);

		if (project) {
			firebase.database().ref('projects/' + "ID-" + Math.random().toString(16).slice(2)).set({
				firstName: project[0]['value'],
				lastName: project[1]['value'],
				email: project[2]['value'],
				mobile: project[3]['value'],
				country: project[4]['value'],
				projectTitle: project[5]['value'],
				projectBudget: project[6]['value'],
				projectDuration: project[7]['value'],
				projectDetails: project[8]['value'],
				created: new Date().toLocaleString(),
				status: "Active"
			});

			$('#projectSchemaForm').trigger('reset');
			$('[name="addNewProjectPlan"]').attr('disabled', true).text('Thanks for Contact with me...');
			setTimeout(function () {
				$('[name="addNewProjectPlan"]').attr('disabled', false).text('Confirm and Submit');
				// location.reload();
			}, 3000);
		}
	});
});
