import { Stack, Box } from '@mui/material';
import { YtVideoCard, YtChannelCard } from '../components';
 
const Videos = ({ vids }) => {
   // console.log(vids)
   const verifiedChannel = vids.find(item => item.id.channelId);
   const searchedVideos = vids.filter(item => item.id.videoId && !item.id.channelId);

   return (
      <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}> 
         {/* {verifiedChannel && 
            <Box color='red'>
               <YtChannelCard channelItem={verifiedChannel} />
            </Box>} */}
         {/* {vids.map((item, index) => (
            <Box key={index} color='white'>
               {item.id.videoId 
                  && <YtVideoCard videoItem={item} />}
               {item.id.channelId
                  && <YtChannelCard channelItem={item} />}
            </Box>
         ))} */}
         {searchedVideos.map((item, index) => (
            <Box key={index} color='white'>
               <YtVideoCard videoItem={item} />
            </Box>
         ))}
      </Stack>
   )
}

export default Videos;