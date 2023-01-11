
import axios from 'axios';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pages = ()  => {
  const [pageCount, setpageCount] = useState(0)    
  
  const getPage = async (page) => {
    const res = await axios.get( `https://api.themoviedb.org/3/movie/popular?api_key=d9b8b56396c1b221d30a114aeb44d454&page=${page}`)
    setpageCount(res.data.total_pages)
  } 
    const handlePageClick = (data) => {
      console.log(data.selected + 1)
     getPage(data.selected + 1)
  }
  
  return (
    
    <>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={4}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="Prev"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    </>
   
  );
}

export default Pages;
