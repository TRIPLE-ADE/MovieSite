import Image from "next/image";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getServerSideProps(id) {
  const response = await fetch(`${baseUrl}/tv/${id}?api_key=${apiKey}`); 
  const data = await response.json();
  return data; 
}

const pages = async ({ params: { id } }) => {
    const tvShowDetails = await getServerSideProps(id);
    const {
      name,
      overview,
      poster_path,
      release_date, 
      genres, 
      vote_average
      
    } = tvShowDetails;
  return (
    <section>
        <Image 
          src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
          alt={name}  
          width={500}
          height={500}
        />
        <p>{overview || 'Overview not available'}</p>
        <p>{name}</p>
        <p>{release_date}</p>
        <p>Average Rating: {vote_average}</p>
      <p>Genres:</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default pages