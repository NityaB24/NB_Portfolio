import React from 'react';
import './styles_footer.css';

function Footer() {
  const downloadCV = () => {
    const cvUrl = '/images/CV.pdf';
    
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = cvUrl;
    anchor.download = 'Nitya_cv.pdf'; // The name you want the file to be downloaded as
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  const viewCV = () => {
    const cvUrl = '/images/CV.pdf';
    // Open the CV in a new tab
    window.open(cvUrl, '_blank');
  };

  return (
    <>
    <div className='footer-container'>
      <div className="content">
        <h1 className='title'>get in - touch</h1>
        <div className="social dets">
          <h1 className='sub-title'>Social :</h1>
          <a className="link" href="https://www.instagram.com/nityab.24?igsh=cnMwcm5ucmRyanJl&utm_source=qr">Instagram</a>
          <a className="link" href="https://www.linkedin.com/in/nitya-balar-ab9066263/">LinkedIn</a>
          <a className="link" href="https://github.com/NityaB24">Github</a>
        </div>

        <div className="social1 dets">
          <h1 className='sub-title'>Email :</h1>
          <a className="link" href="#">nityabalar@gmail.com</a>
        </div>
        <div className="social1 dets">
          <h1 className='sub-title'>Contact :</h1>
          <a className="link" href="#">+91 7984502731</a>
        </div>
          <button className="view-cv-button" onClick={viewCV}>View CV</button>
          <div className="ga"></div>
          <button className="download-cv-button " onClick={downloadCV}>Download CV</button>
        
          <div className="copy">
            <h1 className='sub-title'>&copy;  NB  {new Date().getFullYear()}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
