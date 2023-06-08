import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchAPI';
import { Box } from '@mui/material';
import { Videos, YtChannelCard } from '../components';

const YtChannelDetail = () => {
   const { id } = useParams();
   const [channelStats, setChannelStats] = useState(null);
   const [channelVids, setChannelVids] = useState([]);
   console.log(channelStats, channelVids)

   useEffect(() => {
      fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data => setChannelStats(data?.items[0]));

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setChannelVids(data?.items));
   }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
         <div style={{ 
            background: 'linear-gradient(105deg, rgba(235,113,154,1) 0%, rgba(178,142,187,1) 20%, rgba(117,173,222,1) 46%, rgba(123,196,187,1) 80%, rgba(157,214,48,1) 100%, rgba(48,214,66,1) 100%)',
            zIndex: 10, height: '275px' }} />
         <YtChannelCard channelItem={channelStats} marginTop='-110px' /> {/* Reusable prop marginTop applicable only here */}
      </Box>
      <Box display="flex" p="2">
         <Box sx={{ mr: { sm: '100px', md: '120px', xl: '90px'}, ml: { xs: '60px', sm: '80px', md: '100px', xl: '60px'} }} />
         <Videos vids={channelVids} />
      </Box>
    </Box>
  )
}

export default YtChannelDetail;