import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl, yt } from '../utils/constants';
import he from 'he';

const YtVideoCard = ({ videoItem: { id: { videoId } }, videoItem: { snippet } }) => {
   // console.log(videoId, snippet)
   const decodeTitle = (title) => {
      return he.decode(title);
    };

  return (
    <Card sx={{ width: { md: '356px', xs: '100%', borderRadius: 0} }}>
      {/* Video Thumbnail */}
         <Link to={videoId ? yt+`/video/${videoId}` : yt+`${demoVideoUrl}`}>
            <CardMedia 
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
            sx={{ width: 358, height: 180, "&:hover": { border: "3px solid #FC1503"}, boxSizing: 'border-box' }} />
         </Link>
      {/* Video Description */}
         <Link to={snippet?.channelId ? yt+`/channel/${snippet?.channelId}` : yt+`${demoChannelUrl}`}>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
               <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                  {decodeTitle(snippet?.title.slice(0, 60)) || decodeTitle(demoVideoTitle.slice(0, 60))}
               </Typography>
               <Typography variant="subtitle2" fontWeight="bold" color="gray">
                  {decodeTitle(snippet?.channelTitle || decodeTitle(demoChannelTitle))}
                  <CheckCircle  sx={{ fontSize: 12, color: "gray", ml: '5px' }} />
               </Typography>
            </CardContent>
         </Link>
    </Card>
  )
}

export default YtVideoCard;