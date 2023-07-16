import Image from "next/image";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getServerSideProps(id) {
  const response = await fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`); 
  const data = await response.json();
  return data; 
}

const page = async ({ params: { id } }) => {
  const movieDetails = await getServerSideProps(id)
  return (
    <section>
        <Image 
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} 
          alt={movieDetails.title}
          width={500}
          height={500}
        />
        <p>{movieDetails.overview}</p>
    </section>
  )
}

export default page