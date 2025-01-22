import styles from './footer.module.scss';

function Footer() {
  return (
    <>
      <footer className={`${styles.footer} bg_black `}>
        <div className="container_sm ">
          <div
            className={`${styles.footer_container} flex_items align_middle align_horizontal position_relative`}
          >
            <div
              className={`${styles.logo} flex_items align_middle align_horizontal position_relativ`}
            >
              <div className="logo_lines">
                <div className={styles.logo_1}></div>
                <div className={styles.logo_2}></div>
                <div className={styles.logo_3}></div>
              </div>
              <span className={`${styles.logo_text} text_small`}>
                architecture
              </span>
            </div>
            <div className={`${styles.creator} item_end text_xs`}>
              <p>
                &copy; All rights reserved. Made by{' '}
                <span className="text_primary">Topofthemountain</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
