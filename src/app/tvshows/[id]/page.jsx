import Image from "next/image";
const apiKey = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;

async function getServerSideProps(id) {
  const response = await fetch(`${baseUrl}/tv/${id}?api_key=${apiKey}`); 
  const data = await response.json();
  return data; 
}

const pages = async ({ params: { id } }) => {
    const tvShowDetails = await getServerSideProps(id);
    const {
    name,
    title,
    overview,
    poster_path,
    backdrop_path,
    last_episode_to_air,
    next_episode_to_air,
  } = tvShowDetails;
  return (
    <section>
        <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
          alt={title}  
          width={500}
          height={500}
        />
        <p>{overview || 'Overview not available'}</p>
        <p>{name}</p>
    </section>
  )
}

export default pages