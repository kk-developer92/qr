// Часть запроса
const api = 'https://api.qrserver.com/v1/create-qr-code/?size=160×160&data=';

// Находим HTML элементы
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const qrCodeWrapper = document.querySelector('#card-qr');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	// Очищаем обертку под картинку
	qrCodeWrapper.innerHTML = '';

	// Формируем запрос, он же - адрес картинки
	const request = api + input.value;

	// Формируем HTML разметку под картинку
	const img = `<img src="${request}" alt="QR code">`;

	// Добавляем блоку card-qr CSS класс open
	qrCodeWrapper.classList.add('open');
    
	// Добавляем картинку на страницу
	qrCodeWrapper.insertAdjacentHTML('beforeend', img);
});
