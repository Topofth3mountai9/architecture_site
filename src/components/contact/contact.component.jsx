import { FormProvider, useForm } from 'react-hook-form';
import styles from './contact.module.scss';
import { Form_row } from '../form_row/form_row.component';
import Input_field from '../input/input_field.component';
import { get_any_input_validation } from '../../helpers/get_any_input_validation';
import { FaTelegramPlane } from 'react-icons/fa';

function Contact() {
  const methods = useForm();

  let email_validation = get_any_input_validation(
    'Email Address',
    'text',
    true
  );
  return (
    <section className="bg_black">
      <div className="container">
        <div
          className={`${styles.contact_container}  flex_items align_middle align_horizontal`}
        >
          <h2 className={`${styles.contact_heading} text_large`}>
            stay tuned and get the latest updates
          </h2>
          <FormProvider {...methods}>
            <Form_row>
              <Input_field
                title="Email address"
                placeholder="Enter your email address"
                other_class={styles.input}
                svg={<FaTelegramPlane />}
                {...email_validation}
              />
            </Form_row>
          </FormProvider>
        </div>
      </div>
    </section>
  );
}

export default Contact;
