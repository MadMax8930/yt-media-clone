import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from '../components';
import { fetchFromAPI } from '../utils/fetchAPI';
import { yt } from '../utils/constants';

const YtVideoDetail = () => {
   const { id } = useParams();
   const [selectedVideo, setSelectedVideo] = useState(null);

   useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setSelectedVideo(data?.items[0]));
   }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
         <Box flex={1}>
           <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
              <ReactPlayer url={yt + `/watch?v=${id}`} className="react-player" controls={true} />
           </Box>
         </Box>
      </Stack>
    </Box>
  )
}

export default YtVideoDetail;