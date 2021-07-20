// Social Media Data
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


// Contact Data
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


// Project Gallary Data
const Technologies = () => {
	$.ajax({
		url: './src/storage/technology.json',
		type: 'GET',
		success: (response) => {
			if (response) {
				for (let i = 0; i < response.length; i++) {
					$('#skillAndTechnology').append(`
						<div class="col-sm-4">
							<div class="card my-2">
								<div class="card-body text-center">
									<img src="${response[i]['image']}" alt="${response[i]['technology']}" class="rounded pb-2" width="74" height="74">
									<h5 class="card-title">${response[i]['technology']}</h5>
									<p class="card-text">${response[i]['purpose']}</p>
								</div>
							</div>
						</div>
					`);
				}
			}
		}
	});
}


// Project Gallary Data
const Projects = () => {
	$.ajax({
		url: './src/storage/projects.json',
		type: 'GET',
		success: (response) => {
			if (response) {
				for (let i = 0; i < response.length; i++) {
					$('#projectGallary').append(`
						<div class="col-12 col-md-6 col-xl-4">
							<div class="card my-2">
								<img src="${response[i]['image']}" class="card-img-top" alt="${response[i]['title']} Image" />
								<div class="card-body">
									<h6 class="card-title">Project: ${response[i]['title']}<span class="badge rounded-pill bg-${response[i]['badgeColor']} ms-2">${response[i]['status']}</span></h6>
									<p class="small my-2 text-muted"><strong>Business Module:</strong><br> ${response[i]['module']}</p>
									<p class="small my-2 text-muted"><strong>Responsibility:</strong><br> ${response[i]['responsibility']}</p>
									<p class="small my-2 text-muted"><strong>Technology:</strong><br> ${response[i]['technology']}</p>
									<figcaption class="blockquote-footer text-end pt-2 mb-0">
										Client <i class="far fa-copyright"></i> <cite>${response[i]['client']}</cite>
									</figcaption>
									<a href="${response[i]['website']}" class="btn btn-light" target="_blank">
										<i class="fas fa-external-link-alt me-2 text-primary"></i>Go To The Project
									</a>
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
Technologies();
Projects();
Contacts();



// Copyright Content
$('#copyright').html((new Date().getFullYear() > 2020) ? '2020 - ' + new Date().getFullYear() : new Date().getFullYear());


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
