import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants';
import he from 'he';

const YtVideoCard = ({ videoItem: { id: { videoId } }, videoItem: { snippet } }) => {
   // console.log(videoId, snippet)
   const decodeTitle = (title) => {
      return he.decode(title);
    };

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '290px' }, borderRadius: 0 }}>
      {/* Video Thumbnail */}
         <Link to={videoId ? `/video/${videoId}` : `${demoVideoUrl}`}>
            <CardMedia 
               image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
               sx={{ width: { xs: '100%', sm: '358px', md: '290px' }, height: 162, "&:hover": { border: "3px solid #FC1503"}, boxSizing: 'border-box' }} />
         </Link>
      {/* Video Description */}
         <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : `${demoChannelUrl}`}>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px', width: { xs: '230px', sm: '358px', md: '290px' } }}>
               <Typography variant="subtitle1" fontWeight="bold" color="#fff" marginRight={2}>
                  {decodeTitle(snippet?.title.slice(0, 60)) || decodeTitle(demoVideoTitle.slice(0, 60))}
               </Typography>
               <Typography variant="subtitle2" fontWeight="bold" color="gray">
                  {decodeTitle(snippet?.channelTitle || decodeTitle(demoChannelTitle))}
                  <CheckCircle  sx={{ fontSize: '12px', color: "gray", ml: '5px' }} />
               </Typography>
            </CardContent>
         </Link>
    </Card>
  )
}

export default YtVideoCard;