import {Link} from 'react-router-dom'

import {FaStar} from 'react-icons/fa'

const imageURL = import.meta.env.VITE_IMG

const MovieCard = ({movie, ShowLink = true}) => {
  return (
    <div className='movie-card'>
        <img src={imageURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {ShowLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard