export default function Index() {
  return(
        <div className="frame">
            <div className="container">
                <div className="contents">
                    <div className="photograph-theme">
                        <img src="/go.png" alt="Gökçen Öğütçü " />
                    </div>
                    <div className="contentsText">
                        <p>Hi, I'm Gökçen, a creative <span>technologist with a deep curiosity</span> for innovation. I am passionate about exploring the evolving world of technology and crafting solutions that <span>make a difference.</span></p>
                        
                        <p className="dark-third-color">I am an accomplished CTO adept at leading diverse teams and fostering innovation in technology companies. With a robust technical background, I specialize in crafting cutting-edge digital solutions. <br /><br />
                        
                        My unique perspective as a creative technologist enables me to blend technical precision with a keen eye for design, ensuring every project is both functional and visually compelling.
                        </p>

                    </div>
                </div>

                <div className="experience">
                    <h2 className="experience-h2">My current ventures</h2>

                    <div className="experience-detail first">
                        <div className="company-name">
                            <a href="https://www.hiringcycle.ai/" target="_blank" rel="noopener noreferrer">hiringcycle.ai</a>
                        </div>
                        <div className="company-detail">
                            <div className="company-title">Co-Founder</div>
                            <div className="company-period">2023 - Present</div>
                        </div>
                    </div>

                    <div className="experience-detail second">
                        <div className="company-name">
                            <a href="https://www.beforesunset.ai/" target="_blank" rel="noopener noreferrer">beforesunset.ai</a>
                        </div>
                        <div className="company-detail">
                            <div className="company-title">Co-Founder & CTO</div>
                            <div className="company-period">2022 - Present</div>
                        </div>
                    </div>

                    <div className="experience-detail third">
                        <div className="company-name">
                            <a href="https://brewww.com/" target="_blank" rel="noopener noreferrer">Brew Interactive</a>
                        </div>
                        <div className="company-detail">
                            <div className="company-title">CTO</div>
                            <div className="company-period">2009 - Present</div>
                        </div>
                    </div>

                    <div className="view-all">
                        <a href="https://www.linkedin.com/in/gokcen-ogutcu/" target="_blank" rel="noopener noreferrer">View All</a>
                    </div>
                    
                </div>

                <div className="information">
                    <h3>Get in touch</h3>

                    <div className="information-detail">
                        
                        <div className="information-mail">
                            <div className="top-text">
                                <a href="mailto:low.zone7394@fastmail.com">Let's have a chat</a> 
                            </div>
                            <p>Send email</p>
                        </div>

                        <div className="information-link">
                            <a href="https://www.linkedin.com/in/gokcen-ogutcu/" target="_blank" rel="noopener noreferrer">in/gokcen-ogutcu</a>
                            <p>Linkedin</p>
                        </div>

                        <div className="information-github">
                            <a href="https://github.com/gokceno" target="_blank" rel="noopener noreferrer">gokceno</a>
                            <p>GitHub</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}