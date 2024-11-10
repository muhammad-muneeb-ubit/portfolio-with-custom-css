import "./about.css"
import Image from "next/image";
import Footer from "../component/Footer";
import Header from "../component/Header";
        
        const AboutPage = () => {
          return (
            <>
              <Header />
              <div className="about-container">
                <div className="about-text">
                  <div className="description">
                    <p className="greeting">Assalam O Alaikum!</p>
                    <p className="intro">
                      My name is Muhammad Muneeb, and I&#39;m a talented frontend developer
                      who recently enrolled in intensive training course at Governor
                      House and SMIT. With my passion for creativity and eye for design,
                      I possess the skills to create stunning and responsive websites
                      that captivate visitors and deliver an exceptional user experience.
                    </p>
                    <p className="expertise">
                      My expertise in HTML, CSS, JavaScript, Typescript, Tailwind, and
                      NextJS allows me to bring your vision to life, while ensuring your
                      website is not only aesthetically pleasing but also fully
                      functional and user-friendly. I pride myself on my ability to
                      create seamless designs that adapt to different devices, so your
                      website will look just as impressive on a desktop computer as it
                      does on a smartphone.
                    </p>
                  </div>
                </div>
                <div className="about-pic">
                  <Image
                    className="profile-pic"
                    src="/images/my-full.jpg"
                    alt="Profile Picture"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <Footer />
            </>
          );
        };
        
        export default AboutPage;
       