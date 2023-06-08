import { Link } from 'react-router-dom';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture, yt } from '../utils/constants';

const YtChannelCard = ({ channelItem, marginTop }) => {
   // console.log(channelItem)

  return (
    <Box sx={{ borderRadius: '20px', width: { xs: '358px', md: '290px' }, height: '326px', 
               display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginTop }}>
      {/* Channel Logo */}
         <Link to={`/channel/${channelItem?.id?.channelId}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
               <CardMedia 
                  image={channelItem?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelItem?.snippet?.title}
                  sx={{ borderRadius: '50%', width: '180px', height: '180px', border: '1px solid #e3e3e3', mb: 2 }} />
               <Typography variant="h6" flexWrap='wrap'>
                  {channelItem?.snippet?.title}
                  <CheckCircle sx={{ fontSize: '14px', color: "gray", ml: '5px' }} />
               </Typography>    
            {/* Subscriber Count */}
               {channelItem?.statistics?.subscriberCount && (
                  <Typography>
                     {parseInt(channelItem?.statistics?.subscriberCount).toLocaleString()} Subscribers
                  </Typography>
               )}
            </CardContent>
         </Link>
    </Box>
  )
}

export default YtChannelCard;