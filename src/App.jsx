import { Link } from "react-router-dom";
import "./assets/css/App.css";

import Header from "./components/Header";
import Headings from "./pages/components/Headings";
import Hero from "./pages/components/hero";

const features = [
  {
    title: "Examination",
    info: "Seamless examination taking",
    link: "Learn more",
    colour: "pink",
  },
  {
    title: "Score Analysis",
    info: "Uncover success through score analysis",
    link: "Learn more",
    colour: "lemon",
  },
  {
    title: "Simple Question Formulation",
    info: "Ease through question formulation",
    link: "Learn more",
    colour: "teal",
  },
  {
    title: "Parental Access",
    info: "Explore together with your parents",
    link: "Learn more",
    colour: "yellow",
  },
];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className="main-section">
        <div>
          <Headings
            head="Features"
            subhead="Educative Simplifies the examination process for students and teachers. "
          />
          <div className="features">
            {features.map((features, index) => (
              <article
                key={index}
                className={`features-card ${features.colour}`}
              >
                <h3 className="feature-card_title">{features.title}</h3>
                <p>{features.info}</p>
                <Link to="/">{features.link}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
