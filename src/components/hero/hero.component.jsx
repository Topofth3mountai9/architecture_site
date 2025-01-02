import Button from '../button/button.component';
import styles from './hero.module.scss';

function Hero() {
  return (
    <header>
      <div className="container">
        <div className={`${styles.hero_container} bg_black position_relative`}>
          <img
            src="/hero/landing-bg.jpg"
            alt="great house"
            className={`${styles.hero_img}`}
          />
          <div className={`${styles.hero_text} flex_items flex_column`}>
            <div className={`${styles.hero_header} heading_xl`}>
              <span className="text_primary ">Dream </span>{' '}
              <span className={`${styles.second_span}`}>House</span>
            </div>
            <div className="paragraph_and_cta_btn flex_items align_middle g_2">
              <p className={`${styles.hero_paragraph} text_small`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, voluptates.
              </p>
              <div className="cta_btn">
                <Button type="transparent" size="big" square={true}>
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
