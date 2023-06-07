import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
   <Stack sx={{ flexDirection: { sx: 'row', md: 'column' }, height: { sx: 'auto', md: '95%'}, overflowY: 'auto' }}>
      {categories.map(category => (
         <button onClick={() => setSelectedCategory(category.name)}
                 className="category-btn" 
                 style={{ color: 'white', background: category.name === selectedCategory && '#FC1503' }}
                 key={category.name}>
            <span style={{ marginRight: '15px', color: category.name === selectedCategory ? 'white' : 'red' }}>
               {category.icon}
            </span>
            <span style={{ opacity: category.name === selectedCategory ? '1' : '0.75' }}>
               {category.name}
            </span>
         </button>
      ))}
   </Stack>
)

export default Sidebar;