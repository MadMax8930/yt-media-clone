import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"

const SearchBar = () => (
   <Paper component="form" onSubmit={() => {}} sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, mr: { sm: 5 }, boxShadow: 'none'  }}>
      <input className="search-bar" placeholder="Search..." value="" onChange={() => {}} />
      <IconButton>
         <SearchIcon type="submit" sx={{ p: '10px', color: 'red' }} />
      </IconButton>
   </Paper>
)

export default SearchBar;