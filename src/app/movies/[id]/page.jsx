const apiKey = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;

async function getServerSideProps(id) {
  const response = await fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`); 
  const data = await response.json();
  return data; 
}

const page = async ({ params: { id } }) => {
  const movieDetails = await getServerSideProps(id)
  return (
    <section>
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title}/>
        <p>{movieDetails.overview}</p>
    </section>
  )
}

export default page