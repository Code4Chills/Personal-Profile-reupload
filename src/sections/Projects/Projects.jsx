import styles from './ProjectsStyles.module.css';
import movie from '../../assets/movie-rec.jpg';
import shinraban from '../../assets/shinra-ban.jpg';
import ouichat from '../../assets/ouichat.jpg';
import predapp from '../../assets/pred-app.jpg';
import ProjectCard from '../../common/ProjectCard';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className="row">
        <div className='col-md-6'>
        <ProjectCard
          src={ouichat}
          link="https://ouichat-fullstack-rt-chatapp.onrender.com"
          h3="OUIChat"
          p="Realtime chat App"
        />
        </div>

        <div className='col-md-6'>
        <ProjectCard
          src={shinraban}
          link="https://shinra-ban-ecom-webapp.onrender.com"
          h3="Shinra Ban Ecom"
          p="Clothes, Jewelry and Accesories Ecommerce Web Application"
        />
        </div>

        <div className='col-md-6'>
        <ProjectCard
          src={predapp}
          link="https://diseases-prediction-ml-webapp.onrender.com"
          h3="Diseases Prediction ML Website"
          p="Machine Learning predicts Diabetes, Heart Disease and Parkinsons "
        />
        </div>

        <div className='col-md-6'>
        <ProjectCard
          src={movie}
          link="https://https://github.com/Code4Chills/Movie-Recommendation-System"
          h3="Movie Recommendation system"
          p="Recommends films similar to the one you typed in"
        />
        </div>
      </div>
    </section>
  );
}

export default Projects;
