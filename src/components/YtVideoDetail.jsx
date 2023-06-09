import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Loader, Videos } from '../components';
import { fetchFromAPI } from '../utils/fetchAPI';
import { yt } from '../utils/constants';

const YtVideoDetail = () => {
   const { id } = useParams();
   const [selectedVideo, setSelectedVideo] = useState(null);
   const [relatedVideos, setRelatedVideos] = useState(null);

   useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setSelectedVideo(data?.items[0]));

      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setRelatedVideos(data?.items));
   }, [id]);

   if (!selectedVideo?.snippet || !selectedVideo?.statistics) return <Loader />;

   const { snippet: { title, channelId, channelTitle }, 
           statistics: { viewCount, likeCount, commentCount } 
         } = selectedVideo;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
       {/* Main Selected Video */}
         <Box flex={1}>
           <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
              <ReactPlayer url={yt + `/watch?v=${id}`} className="react-player" controls={true} />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                 {title}
               </Typography>
               <Stack direction='row' justifyContent="space-between" color="#fff" px={2}>
                  <Link to={`/channel/${channelId}`}>
                     <Typography variant="subtitle1" color="gray">
                        {channelTitle}
                        <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                     </Typography>
                  </Link>
                  <Stack direction='row' gap='20px' alignItems='center'>
                     <Typography variant="body1" sx={{ opacity: 0.7 }}>
                        {parseInt(viewCount).toLocaleString()} views
                     </Typography>
                     <Typography variant="body1" sx={{ opacity: 0.7 }}>
                        {parseInt(likeCount).toLocaleString()} likes
                     </Typography>
                     <Typography variant="body1" sx={{ opacity: 0.7 }}>
                        {parseInt(commentCount).toLocaleString()} comments
                     </Typography>
                  </Stack>
               </Stack>
           </Box>
         </Box>
       {/* Side Related Videos */}
         <Box px={2} py={{ xs: 5, md: 1 }} justifyContent="center" alignItems="center">
            <Videos vids={relatedVideos} direction="column" /> {/* extra prop */}
         </Box>
      </Stack>
    </Box>
  )
}

export default YtVideoDetail;