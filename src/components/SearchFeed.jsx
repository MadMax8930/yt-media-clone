import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from '../components';
import { fetchFromAPI } from '../utils/fetchAPI';

const SearchFeed = () => {
   const { searchTerm } = useParams();
   const [videos, setVideos] = useState([]);
   
   useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then(data => setVideos(data.items))
   }, [searchTerm]);

   return (
      <Box p={2} ml="100px"  sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
         <Typography variant='h4' fontWeight='bold' mb={2} style={{ color: 'white' }}>
            Search Results for: {" "}
            <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
         </Typography>
         <Videos vids={videos} />
      </Box>
   )
}

export default SearchFeed;