import BtnPrimary from "../../components/Button/BtnPrimary";
import heroImg from "../../assets/images/Hackathon guy.svg";
import ideaPng from "../../assets/images/Group 11.svg";
import rulesImg from "../../assets/images/Group 10.svg";
import { motion } from "framer-motion";
import judgeImg from "../../assets/images/Group 9.svg";
import chainIcon from "../../assets/images/chain-9365116-7621444.svg";
import sparkIcon from "../../assets/images/1f4a5.png";
import faqIcon from "../../assets/images/Group 2.svg";
import { Criteria, faqQuestions, timeline } from "../../mockData";
import prizeImg from "../../assets/images/Group 3.svg";
import sponsor from "../../assets/images/Group 4.svg";
import sponsorlg from "../../assets/icons/Group 6.svg";
import lock from "../../assets/icons/Group 5.svg";
import Footer from "../../components/Footer/Footer";
import { useIsMobileView } from "../../utils/useIsMobileView";
import prixe1 from "../../assets/images/Group 7.png";
import prixe2 from "../../assets/images/Group 8.png";
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay,
          type: "spring",
          duration: 1.5,
          bounce: 0,
          repeatType: "mirror",
        },
        opacity: {
          delay,
          duration: 0.01,
        },
      },
    };
  },
};

const Home = () => {
  const mobile = useIsMobileView();
  return (
    <div className="home container">
      <section className="home_hero ">
        <div className="home_hero-content">
          <div className="slogan">
            <p>Igniting a Revolution in HR Innovation</p>
            <motion.svg
              initial="hidden"
              animate="visible"
              width={mobile ? "117" : "200"}
              height={mobile ? "11" : "20"}
              viewBox="0 0 117 11"
              fill="none"
            >
              <motion.path
                d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9"
                stroke="#FF26B9"
                strokeWidth="3"
                variants={draw}
              />
            </motion.svg>
          </div>
          <div className="hero-text">
            <h2>getlinked Tech</h2>
            <h2 className="heading">
              Hackathon <span>1.0</span>
              <span className="icon1">
                <img src={chainIcon} />
              </span>
              <span className="icon2">
                <img src={sparkIcon} />
              </span>
            </h2>
            <p>
              Participate in getlinked tech Hackathon <br /> 2023 stand a chance
              to win a Big prize
            </p>
            <BtnPrimary text={"Register"} />
            <p className="countdown">
              00<span>H</span> 00<span>M</span> 00<span>S</span>{" "}
            </p>
          </div>
        </div>
        <div className="home_hero-img">
          <img src={heroImg} alt="hero-img" />
        </div>
      </section>
      <section className="intro-section container">
        <div className="intro-section_img">
          <img src={ideaPng} />
        </div>
        <div className="intro-section_content">
          <h2>
            Introduction to getlinked <br />
            <span>tech Hackathon 1.0</span>
          </h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </div>
      </section>
      <section className="section container reverse">
        <div className="section_img">
          <img src={rulesImg} />
        </div>
        <div className="section_content">
          <h2>
            Rules and <br />
            <span>Guidelines</span>
          </h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </div>
      </section>
      <section className="section criteria">
        <div className="criteria-img">
          <img src={judgeImg} />
        </div>
        <div className="section_content">
          <h2>
            Judging Criteria
            <br />
            <span>Key attributes</span>
          </h2>
          {Criteria.map((item) => (
            <p key={item.key}>
              <span>{item.title}</span> {item.text}
            </p>
          ))}
          <BtnPrimary text={"Read More"} />
        </div>
      </section>
      <section className="section faq container">
        <div className="section_content">
          <h2>
            Frequently Ask
            <br />
            <span>Question</span>
          </h2>
          <p>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <ul className="faq-questions">
            {faqQuestions.map((content) => (
              <li className="faq-questions-item" key={content.key}>
                {content.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="faq-img">
          <img src={faqIcon} />
        </div>
      </section>
      {/* Timeline section */}

      <section className="timeline container">
        <div className="title">
          <h2>Timeline</h2>
          <p>
            Here is the breakdown of the time we <br /> anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="timeline-content ">
          {timeline.map((content, i) => (
            <div className="timeline-content_item" key={content.key}>
              <p>{i + 1}</p>
              <div className="timeline-content_item-card">
                <div>
                  <p>{content.title}</p>
                  <p>{content.body}</p>
                </div>
                <p className="date">{content.date}</p>
              </div>
            </div>
          ))}
          {/* <div className="timeline-content_item">
            <p>1</p>
            <div className="timeline-content_item-card">
              <p>Hackathon Announcement</p>
              <p>
                The getlinked tech hackathon 1.0 is formally <br /> announced to
                the general public and teams <br /> begin to get ready to
                register
              </p>
              <p>November 18, 2023</p>
            </div>
          </div> */}
        </div>
      </section>
      <section className="section prizes containe">
        {!mobile && (
          <div className="prizes-img">
            <img src={prixe2} />
          </div>
        )}
        <div className="title">
          <div className="title-box">
            <h2>
              Prizes and <br /> <span>Rewards</span>
            </h2>
            <p>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
          {!mobile && (
            <div className="title-img">
              <img src={prixe1} />
            </div>
          )}
        </div>
        {mobile && (
          <div className="">
            <img src={prizeImg} alt="prize" />
          </div>
        )}
      </section>
      <section className=" section prize partners container">
        <div className="title">
          <h2>Partners and Sponsors</h2>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="partners-img">
          <img src={mobile ? sponsor : sponsorlg} alt="prize" />
        </div>
      </section>
      <section className="section policy container">
        <div className="policy-body">
          <div className="title">
            <h2>
              Privacy Policy and <br />
              <span>Terms</span>
              <p>Last updated on September 12, 2023</p>
            </h2>
            <p>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className="policy-content">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div>
              <div>
                <h3>Licensing Policy</h3>
                <p>Here are terms of our Standard License:</p>
              </div>
              <ul>
                <li>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </li>
                <li>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </li>
              </ul>
            </div>
            <BtnPrimary text={"Read More"} className={"policy-btn"} />
          </div>
        </div>
        <div className="policy-img">
          <img src={lock} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
