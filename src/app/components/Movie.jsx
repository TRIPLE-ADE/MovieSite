import Link from "next/link"

const Movie = ({ movie }) => {
    const { id, title, release_date } = movie
  return (
    <Link key={id} href={`/movies/${movie.id}`}>
        <div>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
            <p>{title}</p>
            <p>{release_date}</p>
        </div>
    </Link>
)
}

export default Movie