import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import pfp from './images/eggy-pfp.png';
import project1 from './images/Screenshot 2025-08-07 163116.png';
import project2 from './images/cooking-video.png'; 
import project3 from './images/christmasvid.png';

const App = () => {
  useEffect(() => {
    const portfolioSection = document.querySelector('.portfolio-section-container');
    const projectTitles = document.querySelectorAll('.project-card h5');
    let imageIndex = 0;
    const backgroundColors = [
      'rgba(98, 23, 8, 0.5)',
      'rgba(148, 27, 12, 0.5)',
      'rgba(188, 57, 8, 0.5)',
      'rgba(246, 170, 28, 0.5)',
    ];

    projectTitles.forEach(title => {
      title.addEventListener('click', function() {
        portfolioSection.style.backgroundColor = backgroundColors[imageIndex];
        imageIndex = (imageIndex + 1) % backgroundColors.length;
      });
    });

    const modalButtons = document.querySelectorAll('.project-button');
    const closeButtons = document.querySelectorAll('.close-button');

    function openModal(modalId) {
      const modal = document.querySelector(modalId);
      if (modal) {
        modal.style.display = 'block';
      }
    }

    function closeModal(modal) {
      if (modal) {
        modal.style.display = 'none';
      }
    }

    modalButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal-target');
        openModal(modalId);
      });
    });

    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        closeModal(modal);
      });
    });

   
    return () => {
        
    };
  }, []); 

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Brianna's Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#about-section">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#portfolio-section">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#contact-section">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="about-section" id="about-section">
        <div className="container-fluid p-0">
          <div className="about-card">
            <div className="row no-gutters align-items-center">
              <div className="col-md-6">
                <div className="about-image-container">
                  <div className="about-image-placeholder">
                    <img src={pfp} alt="Brianna Titong's Profile Picture" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-text-content">
                  <h2>About Me</h2>
                  <p>
                    Hi! I'm <span className="about-highlight">Brianna Titong</span>, a passionate 3rd Year Computer Science student at De La Salle Lipa (DLSL).
                  </p>
                  <p>
                    I love creating content, from gaming videos and cooking tutorials to music covers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5" id="portfolio-section">
        <h1 className="text-center text-white">My Projects</h1>
        <p className="text-center text-white mb-5">Welcome to my portfolio page, I am Brianna Titong. I am a 3rd Year Computer Science student in DLSL.</p>
        <div className="row row-cols-1 row-cols-md-3 g-4 portfolio-section-container">
          <div className="col">
            <div className="card project-card">
              <img src={project1} className="card-img-top" alt="Project 1 Image" />
              <div className="card-body">
                <h5 className="card-title">BigChadGuysPlus Gameplay Video</h5>
                <p className="card-text">Recorded and edited a video playing a minecraft modpack called "BigChadGuysPlus".</p>
                <button type="button" className="project-button" data-modal-target="#project1Modal">View Details</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card project-card">
              <img src={project2} className="card-img-top" alt="Project 2 Image" />
              <div className="card-body">
                <h5 className="card-title">Cooking Video</h5>
                <p className="card-text">This was a video I made for my TLE classes back in junior high.</p>
                <button type="button" className="project-button" data-modal-target="#project2Modal">View Details</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card project-card">
              <img src={project3} className="card-img-top" alt="Project 3 Image" />
              <div className="card-body">
                <h5 className="card-title">Christmas Song Cover</h5>
                <p className="card-text">A cover of a christmas song I made during Senior Highschool.</p>
                <button type="button" className="project-button" data-modal-target="#project3Modal">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="project1Modal" className="modal">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <div className="modal-header">
            <h5 className="modal-title">BigChadGuysPlus Gameplay Video Details</h5>
          </div>
          <div className="modal-body">
            <p><strong>Description:</strong> Recorded and edited a video playing a minecraft modpack called "BigChadGuysPlus".
            I was joined by a friend to play this modpack. The video is basically a compilation of funny moments with edited in memes and background music to fit the vibe. </p>
          </div>
        </div>
      </div>

      <div id="project2Modal" className="modal">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <div className="modal-header">
            <h5 className="modal-title">Cooking Video Details</h5>
          </div>
          <div className="modal-body">
            <p><strong>Description:</strong>This was a video I made for my TLE classes back in junior high. I was tasked to make a main course and a side dish. I cooked bistek with eggpant and boiled eggs. I also made nachoes for the side dish.</p>
          </div>
        </div>
      </div>

      <div id="project3Modal" className="modal">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <div className="modal-header">
            <h5 className="modal-title">Christmas Song Cover Details</h5>
          </div>
          <div className="modal-body">
            <p><strong>Description:</strong> A cover of a christmas song. I entered a virtual talent show during my senior high christmas party through zoom.</p>
          </div>
        </div>
      </div>

      <div className="container my-5" id="contact-section">
        <div className="contact-form p-5">
          <h2 className="text-center mb-4">Contact Me</h2>
          <form id="contactForm">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
