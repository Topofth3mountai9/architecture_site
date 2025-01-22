import { projects } from '../../data';
import Section_bottom from '../section_bottom/section_bottom.component';
import styles from './latest_projects.module.scss';

function Latest_projects() {
  const project_elements = projects.map((project) => {
    const { img, id } = project;
    return (
      <div
        key={id}
        className={`${styles.project_img_wrapper} position_relative`}
      >
        <img
          src={img}
          alt={`${img.split('/')[-1]}`}
          className={`${styles.project_img}`}
        />
        <div
          className={`${styles.card_content} flex_items flex_column align_middl align_horizontal  `}
        >
          <h5 className={`${styles.card_heading} mb_32 text_smal text_regular`}>
            Your Dream House is here
          </h5>
          <p className={`${styles.card_paragraph} text_tin`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
            iste!
          </p>
        </div>
      </div>
    );
  });
  return (
    <section className="bg_dark">
      <div className="container">
        <div
          className={`${styles.latest_projects_container} flex_items flex_column`}
        >
          <h2 className={`${styles.section_heading} mb_64 heading_xl`}>
            LATEST PROJECTS
          </h2>
          <div
            className={`${styles.all_projects} flex_items align_middle align_horizontal  g_2`}
          >
            {/* <div className="all_projects grid grid_5_cols g_2"> */}
            {project_elements}
          </div>
          <Section_bottom
            header_text="Awesome"
            bottom_text="designs"
            other_class={styles.section_bottom}
          />
        </div>
      </div>
    </section>
  );
}

export default Latest_projects;
