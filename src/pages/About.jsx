import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/About.css";
import SmilingImage from "../assets/images/smiling.png";
import TeacherImage from "../assets/images/teacher.jpeg";
import AboutCard from "../components/AboutCard";

var uses = [
  {
    title: "For Schools",
    text: "Educativ provide students faster and more detailed feedback on their academic performance with immediate identification of areas of weakness helping them to improve their academic performance more quickly.",
    type : "teal"
  },
  {
    title: "For Parents",
    text: "Educativ provide parents with faster feedback on their academic performance of their wards with helping them to immediately identify areas for improvement thereby promoting academic development.",
    type : "pink"
  },
  {
    title: "For Teachers",
    text: "Educativ allow teachers to save time on grading, providing them with more time for other teaching responsibilities as well as  detecting areas of weakness in student work and adapt their lesson plans accordingly.",
    type : "yellow"
  },
  {
    title: "For Students",
    text: "Educativ helps schools streamline their grading process and save time It guarantees uniformity in grading standards and gives students personalized feedback, promoting their academic growth.",
    type : "green"
  },
];

const About = () => {
  return (
    <>
      <Header />
      <div className="grid-wrapper mb2">
        <div className="container">
          <div className="row gap-0 about-bg mb2">
            <div className="col-md-4">
              <img
                src={TeacherImage}
                alt={`teacher image`}
                className="about-img-1"
              />
            </div>
            <div className="col-md-8 about-flex">
              <div className="about-flex-col">
                <div className="about-block">
                  <h2>Vision</h2>
                  <p>
                    To be the leading digital automated system application
                    across the globe.
                  </p>
                </div>
                <div className="about-block">
                  <h2>Mission</h2>
                  <p>
                    To improve educational institutions through the use of AI
                    technology to provide and efficent and flexible. grading
                    system
                  </p>
                </div>
                <div className="about-block">
                  <h2>Core Values</h2>
                  <p>
                    Privacy, Scalability, Consistency, Innovation and Impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {uses.map((use, i) => (
                  <div key={i} className="col-md-6">
                    <AboutCard title={use.title} text={use.text} type={use.type} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4 order-first order-md-2">
              <img
                src={SmilingImage}
                alt={`teacher image`}
                className="about-img-2"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
