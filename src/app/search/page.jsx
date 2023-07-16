'use client'
import { useState,useEffect } from 'react';
import SearchInput from '@/app/components/SearchInput';
import Movie from '@/app/components/Movie';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${currentPage}`
      );
      const data = await response.json();
      console.log(data);

      setSearchResults(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    handleSearch();
  }, [currentPage]);

  return (
    <div>
      <SearchInput
        value={searchQuery}
        onChange={handleInputChange}
        onSearch={handleSearch}
      />
      <div className='grid grid-cols-4'>
        {searchResults.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className='flex gap-5'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
