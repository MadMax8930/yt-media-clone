import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants';

const YtVideoCard = ({ videoItem: { id: { videoId } }, videoItem: { snippet } }) => {
   console.log(videoId, snippet)

  return (
    <Card>
      <Link to={videoId ? `https://youtube.com/video/${videoId}` : `https://youtube.com/${demoVideoUrl}`}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: 358, height: 180 }}/>
      </Link>
    </Card>
  )
}

export default YtVideoCard;