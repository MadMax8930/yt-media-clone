import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { SearchIcon } from "../utils/constants";

const SearchBar = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const navigate = useNavigate();

   const handleSubmitSearch = (e) => {
      e.preventDefault();
      if (searchTerm) navigate(`/search/${searchTerm}`);
      setSearchTerm('');
   }; 

   return (
      <Paper 
         component="form" onSubmit={handleSubmitSearch} 
         sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, mr: { sm: 5 }, boxShadow: 'none'  }}>
         <input 
            className="search-bar" placeholder="Search..." 
            value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
         <IconButton>
            <SearchIcon type="submit" sx={{ p: '10px', color: 'red' }} />
         </IconButton>
      </Paper>
   )
}

export default SearchBar;