import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, MainSection, SearchFeed, YtVideoDetail, YtChannelDetail } from './components';

const App = () => (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000'}}>
         <Navbar />
         <Routes>
            <Route path='/' element={<MainSection />} />
            <Route path='/video/:id' element={<YtVideoDetail />} />
            <Route path='/channel/:id' element={<YtChannelDetail />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
         </Routes>
      </Box>
    </BrowserRouter>
)

export default App;
