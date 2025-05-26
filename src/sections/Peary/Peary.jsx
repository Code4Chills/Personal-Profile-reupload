import styles from './PearyStyles.module.css';
import Pearry_img from '../../assets/Pearry-img.webp';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import cv from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Peary() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const instaIcon = theme === 'light' ? instagramLight : instagramDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="BigPerr" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={Pearry_img}
          className={styles.BigPerr}
          alt="Profile picture of Peary Ilunga"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Peary
          <br />
          Ilunga
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://www.instagram.com/rypear_lee/" target="_blank">
            <img src={instaIcon} alt="Instagram icon" />
          </a>
          <a href="https://github.com/Code4Chills/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Experienced in frontend developement of modern Django and React web applications for E-commerce
          businesses. Qualified in fullstack development of Django web apps.
        </p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
      <br/>
    </section>
    
  );
}

export default Peary;