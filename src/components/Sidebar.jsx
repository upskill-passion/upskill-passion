import { Stack } from "@mui/material";

const categories = [
  { name: "New" },
  { name: "Beluga" },
  { name: "Coding" },
  { name: "ReactJS" },
  { name: "NextJS" },
  { name: "Music" },
  { name: "Education" },
  { name: "Podcast" },
  { name: "Movie" },
  { name: "Gaming" },
  { name: "Live" },
  { name: "Sport" },
  { name: "Fashion" },
  { name: "Beauty" },
  { name: "Comedy" },
  { name: "Gym" },
  { name: "Crypto" },
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        onClick={() => setSelectedCategory(category.name)}
        className="category-btn"
        key={category.name}
        style={{
          background: category.name === selectedCategory && "#3b5998",
          color: "white",
        }}
      >
        <span style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
