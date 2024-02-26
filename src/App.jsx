/* import BasicUseMemo from "./components/BasicUseMemo"; */
import BlogPosts from "./components/BlogPosts";
import "./App.css";

const posts = [
  {
    id: 1,
    slug: "beginning-html-day-one",
    date: "Sat Feb 24 2024 18:00 GMT+0100 /Central European Standard Time",
    data: "Lorem ipsum",
  },
  {
    id: 2,
    slug: "beginning-css-day-five",
    date: "Sat Jan 24 2024 18:00 GMT+0100 /Central European Standard Time",
    data: "Lorem ipsum",
  },
  {
    id: 3,
    slug: "beginning-javascript-day-one",
    date: "Sat Apr 24 2024 18:00 GMT+0100 /Central European Standard Time",
    data: "Lorem ipsum",
  },
  {
    id: 4,
    slug: "beginning-react-day-one",
    date: "Sat Aug 24 2024 18:00 GMT+0100 /Central European Standard Time",
    data: "Lorem ipsum",
  },
  {
    id: 5,
    slug: "beginning-node-day-one",
    date: "Sat Nov 24 2024 18:00 GMT+0100 /Central European Standard Time",
    data: "Lorem ipsum",
  },
];

function App() {
  return (
  <>
   {/*  <BasicUseMemo /> */}
  <BlogPosts posts={posts} />
  </>
  );
}

export default App;
