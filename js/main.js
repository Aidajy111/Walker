const openProfileModal = $('#openProfileModal')
const openProfileModalBody = $('#openProfileModalBody')

openProfileModal.on('click', function () {
	openProfileModalBody.toggleClass('active')
})

$('#eventSlid-1').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
})
$('#eventSlid-2').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
})
$('.rote-card__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
})

var dntSaveRoute = $('.dnt-save-route')

$('.dnt-save-route').click(function () {
	alert('Маршрут добавлен в ваши маршруты')
})
$('#createRoute').on('click', function () {
	window.location.replace('/my-route.html')
	return false
})
