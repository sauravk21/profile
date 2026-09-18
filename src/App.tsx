import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import profilePhoto from "./assets/profile.jpg";
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
          <a href="#projects" className="hover:text-blue-600 transition ">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition " >Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition ">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section ">
        <div className="hero-content">
          <div className="hero-text">
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
              A passionate Senior Software Engineer | Problem Solver| Lifelong Learner
            </p>


            <a href="https://drive.google.com/file/d/1TyzGkbk4w8QEnMTjur1NBdlp_tlT4i4d/view?usp=sharing" className="download-btn">
              View My Resume
            </a>
          </div>

          <img src={profilePhoto} alt="Saurav Kumar" className="profile-photo" />
        </div>
      </section>

      {/* Background */}
      <section id="about" className="max-w-4xl mx-auto full-width-container py-10 px-6 ">
        <h3 className="section-heading ">Background</h3>

        <p className="text-justify mb-2">
          I'm currently working as a Senior Software Engineer at <span className="font-semibold">Samsung Research, Bangalore</span>,
          specializing in developing solutions for the smartphone gallery experience. Before this, I obtained my
          bachelor's degree in Information Technology from <span className="font-semibold">National Institute of
          Technology Karnataka, Surathkal</span>. During the summer of 2023, I interned at Samsung.
        </p>

        <p className="text-justify mb-2">
          As a software engineer, I enjoy working on challenging problems, particularly in
          the fields of frameworks and machine learning. My passion lies in developing scalable,
          secure systems and upskilling myself for the future, driven by the goal of leveraging
          computer science to bring positive change.
        </p>

        <p className="text-justify ">
          <span className="font-semibold">When I'm not in front of a computer screen</span>, I'm usually playing ⚽️,
          visiting 🏞️, or cooking 🧑‍🍳.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto py-10 px-6">
        <h3 className="section-heading">Experience</h3>
        <p>
          <ul className="list-disc ml-6 space-y-6">
            <li><span className="font-semibold">Senior Software Engineer</span> – Samsung Research Bangalore (July 2024 - Present)
              <ul className="list-disc ml-6 space-y-1 mt-1">
                <li><span className="font-semibold">Duplicate Image Detection Enhancement:</span> Improved duplicate-image detection
                  for memory cleanup by optimizing database query execution and adding rule-based candidate filtering, delivering
                  200× performance improvement and reducing unnecessary image processing overhead.</li>
                <li><span className="font-semibold">Document Classification Improvement:</span> Fine-tuned Tiny-BERT for image
                  document classification, increasing categorization accuracy from 70% to 92%, and built the application layer for
                  seamless model inference and integration into the document processing pipeline.</li>
                <li><span className="font-semibold">Pet Face Detection &amp; Clustering:</span> Implemented an end-to-end pet
                  identification pipeline using BlazeFace model for face detection, followed by face embedding extraction and
                  clustering to group pets across images; designed database schema and indexing to store pet identities,
                  embeddings, and image mappings, enabling personalized pet story generation based on individual pet photo
                  clusters.</li>
                <li><span className="font-semibold">SmartSwitch:</span> Developed an image metadata migration workflow for
                  old-to-new device transfers, covering database backup, encryption, secure data transfer, decryption,
                  validation, and database restoration; added integrity checks and error handling to ensure reliable and
                  consistent migration.</li>
                <li>Migrated service queries from an internal database to a standardized database, designed the target schema,
                  and refactored data-access workflows to simplify legacy database management and improve system
                  maintainability.</li>
              </ul>
            </li>
          </ul>
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-100 py-14 px-6">
        <h3 className="section-heading-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <div className="project-card">
            <h4 className="font-bold mb-2">Event Photo Discovery System</h4>
            <p className="text-sm mb-1">
              Built a FastAPI backend for asynchronous image processing, face embedding
              generation, and face clustering across uploaded event photos. Implemented
              Qdrant-based vector similarity search with PostgreSQL metadata storage, so
              users can find their photos from a selfie.
            </p>
            <p className="text-sm mb-1">
              Python, FastAPI, Next.js, InsightFace, Qdrant, PostgreSQL, Supabase, Docker
            </p>
            <a href="https://github.com/sauravk21/document-rag-pipeline" className="project-btn">View Details</a>
          </div>

          <div className="project-card">
            <h4 className="font-bold mb-2">DocuRAG</h4>
            <p className="text-sm mb-1">
              Built a full-stack document Q&amp;A system using Spring Boot, Spring AI, and Llama.
              Its RAG pipeline uses PDFBox text extraction, semantic chunking, and PGVector
              cosine similarity search to return grounded answers with page-level source
              citations. The React front end supports drag-and-drop PDF upload, real-time
              processing status, and multi-document scoping, and the whole stack is
              containerized with Docker Compose.
            </p>
            <p className="text-sm mb-1">
              Spring AI, Llama, RAG, Vector DB, PostgreSQL, React
            </p>
            <a href="https://github.com/sauravk21/document-rag-pipeline" className="project-btn">View Details</a>
          </div>


        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-14 px-6">
        <h3 className="section-heading-center">Skills</h3>
        <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed">
          System Design · Microservices · Distributed Systems · REST API · Concurrency · OOPS · PyTorch · Computer Vision · Generative AI · LangChain · Java · Kotlin · Android · Spring Boot · Python · SQL · FastAPI · Docker · Git · Mockito
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 pt-3 pb-8 px-6 text-center">
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
    </div>
  );
}