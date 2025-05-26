import styles from './SkillsStyles.module.css';
import html from '../../assets/icons8-html.svg';
import css from '../../assets/icons8-css.svg';
import react from '../../assets/icons8-react.svg';
import bootstrap from '../../assets/icons8-bootstrap-48.svg';
import c from '../../assets/icons8-c-programming.svg';
import python from '../../assets/icons8-python.svg';
import javascript from '../../assets/icons8-javascript.svg';
import nodejs from '../../assets/icons8-nodejs.svg';
import django from '../../assets/icons8-django.svg';
import aws from '../../assets/icons8-amazon-web-services.svg';
import mongodb from '../../assets/icons8-mongodb.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      
      <hr />
      <div className={styles.skillList}>
        <SkillList src={python} skill="Python" />
        <SkillList src={javascript} skill="Javascript" />
        <SkillList src={c} skill="C" />
      </div>
      <h4 className='sectionTitle'>Languages</h4>

      <hr/>
      <div className={styles.skillList}>
        <SkillList src={html} skill="HTML" />
        <SkillList src={css} skill="CSS" />
        <SkillList src={bootstrap} skill="Bootstrap" />
        <SkillList src={react} skill="ReactJS" />
      </div>
      <h4 className='sectionTitle'>Frontend</h4>

      <hr />
      <div className={styles.skillList}>
        <SkillList src={django} skill="DJANGO" />
        <SkillList src={nodejs} skill="NodeJs" />
      </div>
    <h4 className='sectionTitle'>Backend</h4>
     
      <hr />
      <div className={styles.skillList}>
        <SkillList src={aws} skill="AWS RDS" />
        <SkillList src={mongodb} skill="MongoDB" />
      </div>
      <h4 className='sectionTitle'>Relational Databases</h4>
    </section>
  );
}

export default Skills;