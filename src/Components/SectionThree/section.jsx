import React from 'react';
import './section.css';
import rasmcha from '../../assets/heroo.png';
function SectionThree() {
    return (
        <section className="hero-section container">
            <div className="hero-content">
                <span className="subtitle">Portfolio Service</span>
                <h1 className="main-title">We help design a ecommerce business shop</h1>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
                    euismod quis sit gravida pharetra sit. Cursus vel enim pretium
                    vulputate semper sem elit magna neque. Aliquet adipisc
                </p>
                <div className="button-group">
                    <a href="#" className="see-live">
                        <div className="play-icon">▶</div>
                        See live
                    </a>
                    <a href="#" className="case-study">Case study</a>
                </div>
            </div>

            <div className="hero-illustration">
                <img src={rasmcha} alt="" />
            </div>
        </section>
    );
}

export default SectionThree;