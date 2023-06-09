import { Stack, Box } from '@mui/material';
import { YtVideoCard, YtChannelCard, Loader } from '../components';
 
const Videos = ({ vids, direction }) => {
   // console.log(vids)
   const verifiedChannel = vids?.find(item => item.id.channelId);
   const searchedVideos = vids?.filter(item => item.id.videoId && !item.id.channelId);

   if (!vids?.length) return <Loader />;

   return (
      <Stack direction={ direction || "row" }
         flexWrap='wrap' justifyContent='start' alignItems='start' gap={2}> 
         {verifiedChannel && 
            <Box color='red'>
               <YtChannelCard channelItem={verifiedChannel} />
            </Box>}
         {searchedVideos.map((item, index) => (
            <Box key={index} color='white'>
               <YtVideoCard videoItem={item} />
            </Box>
         ))}
      </Stack>
   )
}

export default Videos;