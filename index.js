
const API_KEY = "1318597a"
let spinner = document.getElementById('spinner');

let toastContainer = document.getElementById('toast-container');

function showToast(message, isSuccess = true) {
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white ${isSuccess ? 'bg-success' : 'bg-danger'}`;
    toast.role = 'alert';
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    toastContainer.appendChild(toast);
    
    
    let toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();

    setTimeout(() => {
        toast.remove();
    }, 5000);
}


async function fetchData(title) {
    try {
        spinner.style.display = 'block';

        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t="${title}"`);
        const data = await response.json();

        if (data && data.Response === 'True') {
            showToast(`Фильм "${data.Title}" найден!`, true);
        } else {
            showToast(`Фильм "${title}" не найден!`, false);
        }

        return data;
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        showToast('Ошибка загрузки данных!', false);
    } finally {
        spinner.style.display = 'none';
    }
}
  
  console.log(fetchData());
  
  
  
  const searchInputElement = document.querySelector('#movie-search-input')
  const searchButtonElement = document.querySelector("#movie-search-button")
  
   
  let movieTitleValue = ''
  let movie = null
  
  searchButtonElement.addEventListener('click', async () => {
    const searchResultsContainer = document.querySelector('.search-results')
    searchResultsContainer.innerHTML = ""
    
    
  
    movieTitleValue = searchInputElement.value
    movie = await fetchData(movieTitleValue)
    const cardElementTemplate = `
    <div class="card" style="width: 18rem">
        <img
        src="${movie.Poster}"
        class="card-img-top"
        alt="${movie.Title} movie poster"
        />
        <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">${movie.Plot}</p>
            <div style>
                <a
                    href="#"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    >
                    Подробнее
                </a>
                <a
                    href="#"
                    class="btn btn-primary"
                    id="add-fav-btn"
                    >
                    Добавить в избранное
                </a>
            </div>
        </div>
    </div>`
    
   
    console.log(searchResultsContainer.children)
    
    searchResultsContainer.insertAdjacentHTML('beforeend', cardElementTemplate)

    const addFavButton = document.getElementById('add-fav-btn')
    addFavButton.addEventListener('click', () => {

        if(localStorage.getItem('favMovies') === null) {
            const favMoviesList = []
            favMoviesList.push(movie)
            localStorage.setItem('favMovies', JSON.stringify(favMoviesList))
            return
        }

        const favMoviesList = JSON.parse(localStorage.getItem('favMovies'))
        favMoviesList.push(movie)
        localStorage.setItem('favMovies', JSON.stringify(favMoviesList))
    })
})
  
  
  const ModalElement = document.getElementById('exampleModal')
  
  ModalElement.addEventListener('show.bs.modal', event => {
    document.querySelector('#modalLabel').textContent = movie.Title
    document.querySelector("#title").textContent= movie.Title
    document.querySelector('#modalImage').src = movie.Poster
    document.querySelector('#actors').textContent = movie.Actors
    document.querySelector('#plot').textContent = movie.Plot
    document.querySelector('#rating').textContent = movie.Rating
    document.querySelector('#release').textContent = movie.Released
  
    
  
  })
  
  
  
  const modalBoxesElement = document.querySelector("#modal-boxes")
  
 
  


  // const a = [1, 2, 3]
  // console.log(a[2]);
  // console.log(a.at(0));
  
  localStorage.setItem('myBirthDate', '26.11.2005')
  const myPhoneNumber = ['998978143400']
  localStorage.setItem('myPhoneNumber', myPhoneNumber)

  const myData = {
    age: 16,
    sex: 'male',
    faceitElo: 2568
  }
  localStorage.setItem('myData', JSON.stringify(myData))

  const cs = {
    premier: 20000,
    experience: '4k hours',
    faceitElo: 2568,
    teams: ['BAZZ', 'Wakanda', 'Refresh']
  }

  localStorage.setItem('cs', JSON.stringify(cs))

  let myDataJSON = localStorage.getItem('myData')
  let myDatas = JSON.parse(myDataJSON)
  myDatas.sex[1]
  console.log(myDatas.sex);

   
  
