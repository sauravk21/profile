import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import "./App.css";


export default function App() {
  return (
    <div className="min-h-screen bg-white  text-gray-800 ">
      {/* Header */}
      <header className="p-4 flex justify-between items-center shadow-md backdrop-blur-md  sticky top-0 z-50 bg-gradient-to-r from-gray-100 to-gray-300 ">

        <h1 className="text-2xl "></h1>
        {/* Navbar */}
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-600 transition ">About</a>
          <a href="#experience" className="hover:text-blue-600 transition ">Experience</a>
          <a href="#skills" className="hover:text-blue-600 transition " >Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition ">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition ">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section ">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="hero-title"
        >
          <h1>
            Hi{" "}<span className="wave-style">👋</span>{"  "} I'm Saurav Kumar
          </h1>
        </motion.h2>

        <p className="hero-subtitle">
          A passionate Software Engineer | Problem Solver| Lifelong Learner
        </p>


        <a href="https://drive.google.com/file/d/19U6MZsxJUxxJoDMlz-qKnzKAab77zTUZ/view?usp=sharing" className="download-btn">
          View My Resume
        </a>
      </section>

      {/* Background */}
      <section id="about" className="max-w-4xl mx-auto full-width-container py-10 px-6 ">
        <h3 className="section-heading ">Background</h3>

        <p className="text-justify mb-2">
          I'm currently working as a Software Engineer at <span className="font-semibold">Samsung Research, Bangalore </span>
          specializing in developing solutions for smartphone gallery experience. I have worked on features like
          stories, scene tag detection from images and face detection in gallery.
          I obtained my bachelor's in Information Technology
          from <span className="font-semibold"> National Institute of Technology, Karnataka Surathkal(NIT-K)</span>. During the summer
          of 2023 I interned from Samsung when I worked on developing solution for creating an automated application utilized for training
          bookeh effect generation models.
        </p>

        <p className="text-justify mb-2">
          As a software engineer, I enjoy working on challenging problems particularly in
          the field of framework and machine learning. My passion involves developing scalable,
          secure systems, upskilling myself for future driven by the goal of leveraging
          computer science to bring positive change.
        </p>

        <p className="text-justify ">
          <span className="font-semibold">When I'm not in front of a computer screen</span>, I'm usually playing ⚽️,
          visiting 🏞️ or enjoying with 🤝.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto py-10 px-6">
        <h3 className="section-heading">Experience</h3>
        <p>
          <ul className="list-disc ml-6 space-y-6">
            <li><span className="font-semibold">Software Engineer</span> – Samsung Research Bangalore (July 2024 - Present)
              <ul className="list-disc ml-6 space-y-1 mt-1">
                <li>Working on solutions for Samsung phones gallery features story generation, face detection and clustering, meta data
                  retrieval from media for enhanced user experience and tag based media search</li>
                <li>Supported in the unification of separate databases used by multiple services to single database to eliminate redundancy
                  Assisted in database schema design, refactoring code, query optimization ensuring smooth transition for services</li>
                <li>Supported feature development for transferring image related meta-data on switching from an old device to new device</li>
                <li>Developed the feature of applying different AI effcts on cover images of gallery stories based on rule</li>
                <li>Leverage Android development, Database Management, Java, SQL for development and integration of new features</li>
              </ul>
            </li>


            <li><span className="font-semibold">Software Engineer Intern</span> – Samsung Research Bangalore (May 2023 - July 2023)
              <ul className="list-disc ml-6 space-y-1 mt-1">
                <li>Designed and developed an automated process for generating image datasets, resulting in a 50% reduction in dataset
                  creation time for training the portrait image creation model on smartphone camera</li>
                <li>Leveraged Python, OpenCV, and PyQt5 GUI library to create a user-friendly, human-in-the-loop software that
                  automates image segmentation tasks using SAM image segmenting architecture</li>

              </ul>
            </li>





          </ul>
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-100 py-14 px-6">
        <h3 className="section-heading-center">Skills</h3>
        <div className="grid md:grid-cols-4  gap-4 max-w-4xl mx-auto">
          {["Android Development", "Machine Learning", "Data Structure", "Database Management", "Design", "OOPs", "JAVA/C++"].map(
            (skill, i) => (
              <div key={i} className="skill-card">
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto py-14 px-6">
        <h3 className="section-heading-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">

          <div className="project-card">
            <h4 className="font-bold mb-2">Cataract Grading Framework</h4>
            <p className="text-sm mb-1">
              Devised a deep learning framework constructed on MobileNetVe2
              architecture for grading eye cataracts based on severity.
            </p>
            <p className="text-sm mb-1">Machine learning, Image Processing, OpenCv, Tensorflow </p>
            <a href="https://github.com/sauravk21/%20" className="project-btn">View Details</a>
          </div>

          <div className="project-card">
            <h4 className="font-bold mb-2">Chat Application</h4>
            <p className="text-sm mb-1">
              Developed a chat application for android featuring real-time
              messaging, user authentication, notification and group chat.
            </p>
            <p className="text-sm mb-1">
              Android Framework, Firebase Database, XML
            </p>
            <a href="https://github.com/sauravk21/%20" className="project-btn">View Details</a>
          </div>


        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-3 px-6 text-center">
        <h3 className="section-heading">Get in touch</h3>
        <p className="mb-6">
          Feel free to reach out if you’d like to collaborate or just say hi!
        </p>
        <div className="contact-icons">
          <a href="mailto:saurav696854@gmail.com" className="hover:text-blue-600">
            <Mail size={28} />
          </a>
          <a href="https://github.com/sauravk21" className="hover:text-blue-600">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/saurav-kumar-120753223/" className="hover:text-blue-600">
            <Linkedin size={28} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-gray-100 font-light text-xs text-sm">
        <p>© {new Date().getFullYear()} [Saurav Kumar]. All rights reserved.</p>
      </footer>
    </div>
  );
}