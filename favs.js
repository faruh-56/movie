let favMoviesList = JSON.parse(localStorage.getItem('favMovies')) || [];

// Контейнер для отображения фильмов
const favMoviesContainer = document.body.querySelector('.fav-movies-container');

// Функция для обновления списка избранных фильмов в DOM и localStorage
function renderFavMovies() {
    // Очищаем контейнер перед рендерингом
    favMoviesContainer.innerHTML = '';

    // Проходим по каждому фильму в списке
    favMoviesList.forEach((favMovie, index) => {
        const cardElementTemplate = `
        <div class="card" style="width: 20rem" data-card-id="${index}">
            <img
            src="${favMovie.Poster}"
            class="card-img-top"
            alt="${favMovie.Title} movie poster"
            />
            <div class="card-body">
                <h5 class="card-title">${favMovie.Title}</h5>
                <p class="card-text">${favMovie.Plot}</p>
                <div class="d-flex align-items-stretch">
                    <a
                    href="#"
                    class="btn btn-primary d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    >
                    Подробнее
                    </a>
                    <a
                        href="#"
                        class="btn btn-danger remove-button"
                        >
                        Удалить из избранного
                    </a>
                </div>
            </div>
        </div>`;

        // Добавляем шаблон карточки фильма в контейнер
        favMoviesContainer.insertAdjacentHTML('beforeend', cardElementTemplate);

        // Привязываем обработчик для удаления фильма
        const removeFavMovieButton = favMoviesContainer.children[favMoviesContainer.children.length - 1].querySelector('.remove-button');

        removeFavMovieButton.addEventListener('click', () => {
            // Удаляем фильм по индексу
            favMoviesList.splice(index, 1);

            // Обновляем localStorage
            localStorage.setItem('favMovies', JSON.stringify(favMoviesList));

            // Перерисовываем список фильмов
            renderFavMovies();
        });
    });
}

// Инициализация отображения фильмов
renderFavMovies();