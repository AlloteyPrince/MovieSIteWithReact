import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import {searchMovies,getPopularMovies} from "../services/api.js";

function Home () {

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const loadPopularMovies = async() =>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])
    
    // [
    //     {id: 1, title:"Wrong Turn", release_date: "2021"},
    //     {id: 2, title:"Chucky", release_date: "2022"},
    //     {id: 3, title:"Saw", release_date: "2023"},
    //     {id: 4, title:"The Nun", release_date: "2024"},
    // ];

    const handleSearch = () => {
        e.preventDefault()
        
        if (!searchQuery.trim()) return

        if (loading) return

        setLoading(true)
        try {
            const searchResults = searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            console.log(err)
            setError("Failed to search movies ....")
        }finally {
            setLoading(false)
        }

        setSearchQuery("........")
    };

    return(
        <div className="home">

            <form onSubmit={handleSearch} className="search-from">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}/>
                    
                    <button type="submit" className="search-button"></button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
  <div className="loading">Loading ...</div>
) : (
  <div className="movies-grid">
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
)}
        </div>
    )
}

export default Home;