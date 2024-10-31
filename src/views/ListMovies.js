import logo from '../logo.svg';
import '../App.css';
import Movie from '../components/Movie';
import PageWrapper from '../components/PageWrapper';
import Pagination from '../components/Pagination';
import { useEffect, useState } from 'react';

function ListMovies() {


    const [page, SetPage] = useState(1);  // Variable de "página actual" inicializada en 1
    const [movies, setMovies] = useState([]); // Array que contiene todas las peliculas
    const total_pages = 7; // Indica la cantidad total de las paginas

    // Función que recibe otra función
    useEffect(() => {

    });

    //  Variable que trae las peliculas
    const searchMovie = async () => { // "async" habilita a que se pueda utilizar "await"
        let url = 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json';
        // https://lucasmoy.dev/data/react/peliculas.json

        // Petición al servidor
        let response = await fetch(url, { // "await" espera que el servidor devuelva el contenido para mostrarlo en el resto de la pagina
            "method": 'GET',
            "headers": {
                "Accept": 'application/json',
                "Content-Type": 'aplication/json',
                "Origin": 'https://raw.githubusercontent.com/'
            }
        })

        let json = await response.json();
        setMovies(json);
    }





    // Calcula el número total de páginas necesarias para mostrar todas las películas
    const getTotalPages = () => {
        let total_movies = movies.length; // Obtiene el total de películas "total_movies" a partir de la longitud de "moviesJson", y lo divide entre "total_pages" para saber cuántas páginas completas se necesitan
        return Math.ceil(total_movies / total_pages); // Devuelve el resultado redondeado hacia arriba con "Math.ceil" para cubrir todas las películas
    }

    // Filtra y muestra las películas de la página actual, calcula el índice de inicio y el final de la lista de películas 
    let loadMovies = movies.slice( // "slice" selecciona solo las películas correspondientes a una página específica
        (page - 1) * total_pages, // Calcula el índice de inicio y el final de la lista de películas de acuerdo con la página actual (page) y el número total de películas por página (total_pages)
        page * total_pages
    );


    // ESTRUCTURA JSX QUE DEVUELVE UNA VISTA
    return (

        // Componente que contiene la estructura principal
        <PageWrapper>

            {/* Bucle que itera sobte cada movie que devuelve el JSON */}
            {movies.map(movie =>
                <movie
                    img={movie.img}
                    title={movie.title}
                    rate={movie.rate}

                    runTime={movie.runTime}
                    director={movie.director}
                    stars={movie.stars}
                    date={movie.date}>
                    {movie.description}
                </movie>
            )
            }

            {/* "Page" recibe la pagina seleccionada por el usuario cuando se haga click */}
            <Pagination page={page} total={4} onChange={(page) => {
                // Renderiza la nueva "página actual"
                SetPage(page)
            }}>
            </Pagination>

        </PageWrapper>
    );
}

export default ListMovies;
