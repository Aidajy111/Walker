const openProfileModal = $('#openProfileModal')
const openProfileModalBody = $('#openProfileModalBody')

openProfileModal.on('click', function () {
	openProfileModalBody.toggleClass('active')
})
