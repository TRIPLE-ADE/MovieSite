import Link from "next/link";
import Image from "next/image";

const Movie = ({ movie }) => {
  const { id, title, poster_path, release_date } = movie;
  return (
    <Link key={id} href={`/movies/${id}`}>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
          width={500}
          height={500}
        />
        <p>{title}</p>
        <p>{release_date}</p>
      </div>
    </Link>
  );
};

export default Movie;
