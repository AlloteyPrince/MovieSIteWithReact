import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../Components/MovieCard"

function Favourite(){

    const {favourites} = useMovieContext();

    if (favourites){
       return (
        <div className="favourites">
            <h2>Your Favourites</h2>
            <div className="movies-grid">
    {favourites.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
        </div>
       )
       
    }
    
    return 
    <div className="favourites-empty">
        <h2> No favourite movies yet!</h2>
        <p>Start adding movies to your favourites and they will appear here</p>
    </div>
}

export default Favourite;
