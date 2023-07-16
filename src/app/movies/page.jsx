import Movie from "@/app/components/Movie";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getStaticProps() {
  const response = await fetch(`${baseUrl}/discover/movie?api_key=${apiKey}`)
  const data = await response.json();
  return data.results; 
}

const page = async() => {
  const MoviesData = await getStaticProps();
  return (
    <section>
      <h2>Movies</h2>
      <div className="grid grid-cols-5">
        {MoviesData.map(movie => (
          <Movie movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default page
