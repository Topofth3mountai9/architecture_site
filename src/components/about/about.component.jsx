import Button from '../button/button.component';
import Section_bottom from '../section_bottom/section_bottom.component';
import styles from './about.module.scss';

function About() {
  return (
    <main className={`${styles.about} bg_dark_light`}>
      <div className="container">
        <div
          className={`${styles.about_container} flex_items align_middle  g_6`}
        >
          <div className={`${styles.about_left}`}>
            <h2 className={`${styles.section_header} heading_1`}>
              We are creative building - design company
            </h2>
            <div className={`${styles.section_paragraph} text_small`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              quas, dolorem fugiat officiis quam placeat.
            </div>
            <Button type="dark" square={true} size="big">
              Read more
            </Button>
          </div>
          <div
            className={`${styles.about_right} flex_items flex_column g_6 position_relative`}
          >
            <div className={`${styles.frame}`}></div>
            <div className={`${styles.img_wrapper} `}>
              <img
                src="/about/about.jpg"
                alt="inside one of our houses"
                className={`${styles.about_img}`}
              />
            </div>
            <Section_bottom
              header_text="20 YEARS"
              bottom_text="EXPERIENCE WORKING"
              other_class={styles.section_bottom}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
