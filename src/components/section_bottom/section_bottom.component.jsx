import styles from './section_bottom.module.scss';

function Section_bottom({ header_text, bottom_text, other_class }) {
  return (
    <>
      <div
        className={`${styles.section_bottom_container} ${other_class} flex_item g_`}
      >
        <div className={`${styles.text} flex_items flex_column g_`}>
          <h2 className={`${styles.top} heading_1`}>{header_text}</h2>
          <h4 className={`${styles.bottom} heading_3`}>{bottom_text}</h4>
        </div>
        {/* <div className={`${styles.bar}`}></div> */}
      </div>
    </>
  );
}

export default Section_bottom;
