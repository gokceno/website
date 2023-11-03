export default function Index() {
  return(
        <div className="frame">
            <div className="container">
                <div className="contents">
                    <div className="photograph-theme">
                        <img src="/go.png" alt="" />
                    </div>
                    <div className="contentsText">
                        <p>Hi, I'm Gökçen, a creative <span>technologist with a deep curiosity</span> for innovation. I am passionate about exploring the evolving world of technology and crafting solutions that make a <span>difference.</span></p>
                        
                        <p id="thirdColor">I am an accomplished CTO adept at leading diverse teams and fostering innovation in technology companies. With a robust technical background, I specialize in crafting cutting-edge digital solutions. <br /><br />
                        
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
                            <div className="company-title">Co-Founder</div>
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

                    <div className="viewAll">
                        <a href="https://www.linkedin.com/in/gokcen-ogutcu/" target="_blank" rel="noopener noreferrer">View All</a>
                    </div>
                    
                </div>

                <div className="information">
                    <h3>Get in touch</h3>

                    <div className="information-detail">
                        
                        <div className="information-mail">
                            <div className="top-text">
                                <a href="mailto:gokcen@ogutcu.com">Let’s talk together</a> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24"  height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M16.9497 17.4497L16.9497 7.55025L7.05025 7.55025M16.9497 7.55025L7.05025 17.4497" stroke="#FF2E00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <p>Send email</p>
                        </div>

                        <div className="information-link">
                            <a href="https://www.linkedin.com/in/gokcen-ogutcu/" target="_blank" rel="noopener noreferrer">in/gokcen-ogutcu</a>
                            <p>Linkedin</p>
                        </div>

                        <div className="information-github">
                            <a href="https://github.com/gokceno" target="_blank" rel="noopener noreferrer">gokceno</a>
                            <p>Github</p>
                        </div>



                    </div>

                </div>

            </div>
        </div>
    );
}