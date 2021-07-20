// Contact Data Render
const SocialMedia = () => {
	$.ajax({
		url: './src/storage/social.json',
		type: 'GET',
		success: (response) => {
			if (response) {
				for (let i = 0; i < response.length; i++) {
					$('.renderSocialMedia').append(`
						<a class="btn btn-primary btn-floating m-1"
							style="background-color: ${response[i]['color']};"
							href="${response[i]['url']}"
							role="button">
							<i class="${response[i]['icon']}"></i>
						</a>
					`);
				}
			}
		}
	});
}

// Contact Data Render
const Contacts = () => {
	$.ajax({
		url: './src/storage/contact.json',
		type: 'GET',
		success: (response) => {
			if (response) {
				for (let i = 0; i < response.length; i++) {
					$('#renderContact').append(`
						<div class="col-4 col-xl-4">
							<div class="card rounded-3">
								<div class="card-body text-center">
									<img src="${response[i]['image']}" alt="${response[i]['title']} Image" class="img-fluid" width="56">
									<p class="card-text pt-4 pb-1">
										<a href="${response[i]['type']}${response[i]['data']}" class="text-muted fw-bold">${response[i]['title']}</a>
									</p>
								</div>
							</div>
						</div>
					`);
				}
			}
		}
	});
}


SocialMedia();
Contacts();



// Copyright Content
$('#copyright').html((new Date().getFullYear() > 2020) ? '2020 - ' + new Date().getFullYear() : new Date().getFullYear());


// Dynamic Images
for (let i = 0; i < 16; i++) {
	$('#projectGallary').append(`
	<div class="col-sm-4 py-2">
		<a class="ripple" href="javascript:;">
			<img alt="example" class="img-fluid rounded" src="assets/images/slider-${i + 1}.png" />
		</a>
	</div>
	`);
}


// Application Prevention
$("img").mousedown(function () {
	return false;
});

$(document).on('contextmenu', function (e) {
	return false;
});

$(document).keydown(function (event) {
	if (event.keyCode == 123) {
		return false;
	} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
		return false;
	} else if (event.keyCode == 18) {
		return false;
	}
});
