import { testimonials } from '../../data';
import Section_bottom from '../section_bottom/section_bottom.component';
import styles from './testimonials.module.scss';
// import { FaQuote } from 'react-icons/md';
import { FaQuoteLeft } from 'react-icons/fa6';

function Testimonial({ id, img, position, testimony, name }) {
  return (
    <>
      <div
        className={`${styles.testimonial_container} flex_items flex_column align_horizontal align_middl position_relative`}
      >
        <h3 className={`${styles.name} text_medium`}>{name}</h3>
        <h4 className={`${styles.position}`}>{position}</h4>
        <FaQuoteLeft className={styles.quote_svg} />
        <p className={`${styles.testimony} text_small font-bold`}>
          {testimony}
        </p>
        <div className={`${styles.testimonial_img_wrapper}`}>
          <img
            src={img}
            alt={`${img.split('/')[-1]}`}
            className={`${styles.testimonial_img}`}
          />
        </div>
      </div>
    </>
  );
}

function Testimonials() {
  const testimonial_elements = testimonials.map((testimonial) => {
    return <Testimonial key={testimonial.id} {...testimonial} />;
  });
  return (
    <section className="bg_dark_light">
      <div className="container ">
        <div
          className={`${styles.testimonials_container} flex_items flex_column `}
        >
          <h2 className={`${styles.section_heading} heading_xl`}>Customers</h2>
          <div
            className={`${styles.all_testimonials} flex_items align_middle align_horizontal g_ mt_48`}
          >
            {testimonial_elements}
          </div>
          <Section_bottom
            header_text="client"
            bottom_text="says"
            other_class={styles.section_bottom}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
