import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="purple-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Uncover <br />
              Most Suitable
              <br /> Possessions
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Discover a range of assets that match your needs effortlessly.</span>
            <span>Eliminate all challenges in securing a home for yourself and<br/>  enjoy a seamless experience in finding the perfect residence.</span>
          </div>

          <SearchBar/>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1200} end={15000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Luxury Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1070} end={7000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Satisfied Clients</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={500} /> <span>+</span>
              </span>
              <span className="secondaryText">Prize-Winnings</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
