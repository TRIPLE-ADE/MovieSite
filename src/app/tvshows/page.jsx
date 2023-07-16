import TVShows from "../components/TVShows";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getStaticProps() {
  const response = await fetch(`${baseUrl}/discover/tv?api_key=${apiKey}`)
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
