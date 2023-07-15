import Link from "next/link"
import Image from "next/image"

const TVShows = ({ tvShows }) => {
    const { 
        id, 
        name, 
        poster_path, 
        first_air_date 
    } = tvShows
  return (
    <Link key={id} href={`/tvshows/${id}`}>
        <div>
            <Image src={`https://image.tmdb.org/t/p/w200${poster_path}`} 
                alt={name}
                width={500}
                height={500}
            />
            <p>{name}</p>
            <p>{first_air_date}</p>
        </div>
    </Link>
  )
}

export default TVShows