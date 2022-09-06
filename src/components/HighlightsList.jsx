import React, { useState, useEffect } from 'react';
import HighlightsItem from "./HighlightsItem";
import Pagination from './Pagination';
import { Box } from '@chakra-ui/react';
import axios from 'axios';

function HighlightsList() {
  const [highlights, setHighlights] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [highlightsPerPage] = useState(8);

console.log(highlights)
  useEffect(() => {
    const fetchHighlights = async() => {
      setLoading(true);
      const res = await axios.get("https://www.scorebat.com/video-api/v3/feed/?token=MTgxNzdfMTY1MzY4MzkzNV9kYjYzMWU5N2RiYTZmMzFmOWE4NzQ5ZWVhNDAxMTk5MDkxZjczYmUz");
      setHighlights(res.data.response);
      setLoading(false);
    }

    fetchHighlights();
  }, []);

const indexOfLastHighlight = currentPage * highlightsPerPage;
const indexOfFirstHighlight = indexOfLastHighlight - highlightsPerPage;
const currentHighlights = highlights.slice(indexOfFirstHighlight, indexOfLastHighlight)

const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
            <Box>
                <HighlightsItem highlights={currentHighlights} loading={loading} />
                <Pagination currentPage={currentPage} highlightsPerPage={highlightsPerPage} totalHighlights={highlights.length} paginate={paginate}/>
            </Box>
    )
  }

export default HighlightsList