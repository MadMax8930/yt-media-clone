import { Link } from 'react-router-dom';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture, yt } from '../utils/constants';

const YtChannelCard = ({ channelItem }) => {
   console.log(channelItem)

  return (
    <Box sx={{
          boxShadow: 'none',
          borderRadius: '20px',
        }}
   >
      {/* Channel Logo */}
         <Link to={yt+`/channel/${channelItem?.id?.channelId}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
               <CardMedia 
                  image={channelItem?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelItem?.snippet?.title}
                  sx={{borderRadius: '50%', width: '210px', height: '210px', mt: 3, ml: 6, mr: 8, border: '1px solid #e3e3e3'}} />
               <Typography variant="h6">
                  {channelItem?.snippet?.title}
                  <CheckCircle  sx={{ fontSize: 14, color: "gray", ml: '5px' }} />
               </Typography>
            </CardContent>
         </Link>
    </Box>
  )
}

export default YtChannelCard;