import "./App.scss";
import DisplayCard from "./components/DisplayCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import data from "./data";

const dataContent = [
  {
    id: 0,
    title: "Popular Destinations",
    desc: "World's best tourist destinations",
    type: "Destination",
  },
  {
    id: 1,
    title: "Best Value Trips",
    desc: "Best offers trips from us",
    type: "Trip",
  },
  {
    id: 2,
    title: "Why Choose Us",
    desc: "Here are reasons you should plan trip with us",
    type: "Marketing",
  },
  {
    id: 3,
    title: "Articles & Tips",
    desc: "Explore some of the best tips from around the world",
    type: "Blog",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {dataContent.map((item) => (
        <DisplayCard
          key={item.id}
          type={item.type}
          listData={data[item.type]}
          title={item.title}
          desc={item.desc}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
