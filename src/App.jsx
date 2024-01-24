import { Link } from "react-router-dom";
import "./assets/css/App.css";

import Header from "./components/Header";
import Headings from "./pages/components/Headings";
import Hero from "./pages/components/hero";

import girlImage from "./assets/images/girl-image.png";
import books from "./assets/images/books.png";
import boyImage from "./assets/images/boy-image.png";

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
        {/* CMT: FEATURES */}
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
                <h3 className="features-card__title">{features.title}</h3>
                <p>{features.info}</p>
                <Link to="/">{features.link}</Link>
              </article>
            ))}
          </div>
        </div>

        {/* CMT: BENEFITS */}
        <div className="benefits_sect">
          <Headings
            head="Benefits"
            subhead="Educative Simplifies the examination process for students and teachers."
          />
          <div className="two-grid">
            <div className="image-content">
              <img src={girlImage} alt="Girl reading" />
            </div>
            <div className="text-content">
              <h3 className="heading">Empower Your Education Journey</h3>
              <p className="text">
                Immerse yourself in the transformative experience of effortless
                exam-taking, where every click unlocks a gateway to unparalleled
                learning. Discover, assess, and elevate your potential,
                cultivating brilliance on your personalized pathway to success.
                Embrace a journey of educational empowerment, where each exam is
                a stepping stone towards a brighter, more knowledge-enriched
                future!
              </p>
            </div>
          </div>
          <div className="two-grid">
            <div className="text-content">
              <h3 className="heading">Elevate, Empower, Excel</h3>
              <p className="text">
                Our educational platform offers limitless benefits, empowering
                students towards excellence. It redefines the learning
                landscape, fostering growth and enriching the educational
                experience. Join us on a transformative journey, unlocking a
                path to unparalleled excellence and boundless possibilities.
              </p>
            </div>
            <div className="image-content">
              <img src={books} alt="Books stack" className="book_image" />
            </div>
          </div>
          <div className="two-grid">
            <div className="image-content">
              <img src={boyImage} alt="Boy reading" />
            </div>
            <div className="text-content">
              <h3 className="heading">Seamless Education, Endless Benefits</h3>
              <p className="text">
                Experience a transformative journey through seamless education,
                enriched by endless benefits. Our state-of-the-art platform
                offers a fluid, boundless learning experience that transcends
                traditional boundaries. Join us today to unlock possibilities,
                expand educational horizons, and enhance your learning
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
