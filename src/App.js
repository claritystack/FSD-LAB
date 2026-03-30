import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  const projects = [
    "Portfolio Website",
    "Notes App",
    "E-commerce App (In-progress)"
  ];

  const education = [
  {
    degree: "B.Tech Computer Science",
    institute: "MIT-WPU, Pune",
    year: "2023 - 2027"
  },
  {
    degree: "Class XII",
    institute: "DAV Public School, Nerul",
    year: "2022"
  }
];

  const skills = ["C", "C++", "Kotlin", "Python", "React", "Jetpack Compose", "MVVM"];

  return (
  <div>
    <Header name="Atharva Bagal" role="Btech CSE Student" />
    <About desc="Passionate about web development and AI." />
    
    <Education data={education} />   {/* 👈 ADD HERE */}
    
    <Projects data={projects} />
    <Skills skills={skills} />
    <Footer />
  </div>
);
}

export default App;