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

document.addEventListener('DOMContentLoaded', () => {
	const counters = {
		adults: 1,
		children: 0,
	}

	const updateCount = target => {
		document.getElementById(`${target}-count`).textContent = counters[target]
	}

	document.querySelectorAll('.counter__btn').forEach(button => {
		button.addEventListener('click', e => {
			const target = e.target.dataset.target
			if (e.target.classList.contains('plus')) {
				counters[target]++
			} else if (e.target.classList.contains('minus') && counters[target] > 0) {
				counters[target]--
			}
			updateCount(target)
		})
	})
})

$('.delete').on('click', function () {
	alert('Вы точно хотите удалить точку?')
	$(this).parents('.dots-card').hide()
})

// изменения позиций точек

$(document).ready(function () {
	function updateNumbers() {
		// Обновляем номера точек в .green-text
		$('.route-redactor__dots .dots-card').each(function (index) {
			$(this)
				.find('.green-text')
				.first()
				.text('точка № ' + (index + 1) + ':')
		})
	}

	// Обработчик для кнопки вниз
	$(document).on('click', '.down', function () {
		const currentCard = $(this).closest('.dots-card')
		const nextCard = currentCard.next('.dots-card')

		if (nextCard.length) {
			currentCard.insertAfter(nextCard)
			updateNumbers()
		}
	})

	// Обработчик для кнопки вверх
	$(document).on('click', '.upp', function () {
		const currentCard = $(this).closest('.dots-card')
		const prevCard = currentCard.prev('.dots-card')

		if (prevCard.length) {
			currentCard.insertBefore(prevCard)
			updateNumbers()
		}
	})

	// Открытие картинок в модальном окне для dots-card
	$(document).on(
		'click',
		'.dots-card__image-btn__left__images__item img',
		function () {
			const currentImage = $(this)
			const allImages = currentImage
				.closest('.dots-card__image-btn__left__images')
				.find('img')
			const imageUrls = allImages.map((index, img) => $(img).attr('src')).get()
			let currentIndex = allImages.index(currentImage)

			// Создаем модальное окно
			const modal = $(
				`<div class="image-modal">
                <div class="image-modal__overlay"></div>
                <div class="image-modal__content">
                    <button class="image-modal__close">&times;</button>
                    <button class="image-modal__prev">&#9664;</button>
                    <img class="image-modal__img" src="${imageUrls[currentIndex]}" alt="Image" />
                    <button class="image-modal__next">&#9654;</button>
                </div>
            </div>`
			)

			$('body').append(modal)
			$('body').addClass('no-scroll')

			// Обработчики кнопок в модальном окне
			modal.on(
				'click',
				'.image-modal__close, .image-modal__overlay',
				function () {
					modal.remove()
					$('body').removeClass('no-scroll')
				}
			)

			modal.on('click', '.image-modal__prev', function () {
				currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length
				modal.find('.image-modal__img').attr('src', imageUrls[currentIndex])
			})

			modal.on('click', '.image-modal__next', function () {
				currentIndex = (currentIndex + 1) % imageUrls.length
				modal.find('.image-modal__img').attr('src', imageUrls[currentIndex])
			})
		}
	)

	// Открытие картинок в модальном окне для gallery-wrapper
	$(document).on('click', '.gallery-wrapper__image img', function () {
		const currentImage = $(this)
		const allImages = currentImage.closest('.gallery-wrapper').find('img')
		const imageUrls = allImages.map((index, img) => $(img).attr('src')).get()
		let currentIndex = allImages.index(currentImage)

		// Создаем модальное окно
		const modal = $(
			`<div class="image-modal">
                <div class="image-modal__overlay"></div>
                <div class="image-modal__content">
                    <button class="image-modal__close">&times;</button>
                    <button class="image-modal__prev">&#9664;</button>
                    <img class="image-modal__img" src="${imageUrls[currentIndex]}" alt="Image" />
                    <button class="image-modal__next">&#9654;</button>
                </div>
            </div>`
		)

		$('body').append(modal)
		$('body').addClass('no-scroll')

		// Обработчики кнопок в модальном окне
		modal.on(
			'click',
			'.image-modal__close, .image-modal__overlay',
			function () {
				modal.remove()
				$('body').removeClass('no-scroll')
			}
		)

		modal.on('click', '.image-modal__prev', function () {
			currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length
			modal.find('.image-modal__img').attr('src', imageUrls[currentIndex])
		})

		modal.on('click', '.image-modal__next', function () {
			currentIndex = (currentIndex + 1) % imageUrls.length
			modal.find('.image-modal__img').attr('src', imageUrls[currentIndex])
		})
	})

	// Открытие картинки в модальном окне для event-block__card
	$(document).on('click', '.event-block__card__image img', function () {
		const imageUrl = $(this).attr('src')

		// Создаем модальное окно
		const modal = $(
			`<div class="image-modal">
                <div class="image-modal__overlay"></div>
                <div class="image-modal__content">
                    <button class="image-modal__close">&times;</button>
                    <img class="image-modal__img" src="${imageUrl}" alt="Image" />
                </div>
            </div>`
		)

		$('body').append(modal)
		$('body').addClass('no-scroll')

		// Обработчики кнопок в модальном окне
		modal.on(
			'click',
			'.image-modal__close, .image-modal__overlay',
			function () {
				modal.remove()
				$('body').removeClass('no-scroll')
			}
		)
	})

	// Инициализируем обновление номеров при загрузке страницы
	updateNumbers()
})

$(document).ready(function () {
	// Обновление итоговой стоимости при изменении количества людей
	function updateTotalCost(card) {
		const adultsCount = parseInt($('#adults-count').text(), 10)
		const childrenCount = parseInt($('#children-count').text(), 10)
		const totalPeople = adultsCount + childrenCount

		// Получаем средний чек для текущего заведения
		const averageCheck = parseFloat(
			card
				.find('.dots-card__information__bottom__price .green-text')
				.text()
				.replace(',', '.')
		)

		// Рассчитываем итоговую стоимость
		const totalCost = totalPeople * averageCheck

		// Обновляем отображение стоимости
		card
			.find('.dots-card__information__bottom__price .green-text')
			.text(`${totalCost.toFixed(2)}`)
	}

	// Обработчик для кнопок изменения количества людей
	$(document).on('click', '.counter__btn', function () {
		const target = $(this).data('target')
		const countElement = $(`#${target}-count`)
		let count = parseInt(countElement.text(), 10)

		if ($(this).hasClass('plus')) {
			count += 1
		} else if ($(this).hasClass('minus') && count > 0) {
			count -= 1
		}

		countElement.text(count)

		// Обновляем стоимость для каждого заведения
		$('.dots-card').each(function () {
			updateTotalCost($(this))
		})
	})

	// Инициализация: обновляем стоимость при загрузке страницы
	$('.dots-card').each(function () {
		updateTotalCost($(this))
	})
})
