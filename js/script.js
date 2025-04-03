'use strict';

const searchForm = document.getElementById('search-form');
const movieNameInput = document.getElementById('movie-name');
const movieTypeSelect = document.getElementById('movie-type');
const resultsContainer = document.getElementById('results');
const movieDetailsContainer = document.getElementById('movie-details');
const paginationContainer = document.getElementById('pagination');

const apiKey = '2d5ce6b6';

let currentPage = 1;
let totalResults = 0;

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    currentPage = 1;
    performSearch();
});

function performSearch() {
    const movieName = movieNameInput.value;
    const movieType = movieTypeSelect.value;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}&type=${movieType}&page=${currentPage}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.Search) {
                totalResults = parseInt(data.totalResults);
                displayResults(data.Search);
                displayPagination();
            } else {
                resultsContainer.innerHTML = '<p>Movie not found!</p>';
                paginationContainer.innerHTML = '';
                movieDetailsContainer.innerHTML = '';
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            resultsContainer.innerHTML = '<p>An error occurred.</p>';
            paginationContainer.innerHTML = '';
            movieDetailsContainer.innerHTML = '';
        });
}

function displayResults(movies) {
    resultsContainer.innerHTML = '';
    movies.forEach((movie) => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
            <h3>${movie.Title}</h3>
            <img src="${movie.Poster}" alt="${movie.Title}" style="max-width: 150px;">
            <button class="details-button" data-imdbid="${movie.imdbID}">Details</button>
        `;
        resultsContainer.appendChild(movieElement);
    });

    const detailsButtons = document.querySelectorAll('.details-button');
    detailsButtons.forEach((button) => {
        button.addEventListener('click', () => {
            displayMovieDetails(button.dataset.imdbid);
        });
    });
}

function displayMovieDetails(imdbID) {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            movieDetailsContainer.innerHTML = `
                <h2>${data.Title}</h2>
                <img src="${data.Poster}" alt="${data.Title}" style="max-width: 200px;">
                <p><strong>Year:</strong> ${data.Year}</p>
                <p><strong>Director:</strong> ${data.Director}</p>
                <p><strong>Plot:</strong> ${data.Plot}</p>
            `;
        })
        .catch((error) => {
            console.error('Error:', error);
            movieDetailsContainer.innerHTML = '<p>An error occurred.</p>';
        });
}

function displayPagination() {
    const totalPages = Math.ceil(totalResults / 10);
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            performSearch();
        });
        paginationContainer.appendChild(pageButton);
    }
}