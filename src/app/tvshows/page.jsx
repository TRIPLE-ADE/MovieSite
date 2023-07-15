import TVShows from "../components/TVShows";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b1d8bee7a4e525be9c59b745b81e6a75';

async function getStaticProps() {
  const response = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}`)
  const data = await response.json();
  return data.results;
}

const page = async() => {
  const TVShowsData = await getStaticProps();
  return (
    <section>
      <h2>TV Shows</h2>
      <div className="grid grid-cols-5">
        {TVShowsData.map(tvShows => (
          <TVShows tvShows={tvShows} />
        ))}
      </div>
    </section>
  )
}

export default page
