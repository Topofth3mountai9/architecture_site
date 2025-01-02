import { useState, useEffect } from 'react';
import styles from './search_input.module.scss';
import { FaMagnifyingGlass } from 'react-icons/fa6';

function Search_input({ placeholder, background }) {
  let background_classes;
  if (background === 'dark') {
    background_classes = styles.dark_bg;
  }

  return (
    <div className={styles.search_input_container}>
      <form className={styles.search_form_container}>
        <div className={`${styles.form_group}`}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder={placeholder}
            className={`${styles.input} ${background_classes}`}
            // onChange={handle_change}
          />
          <FaMagnifyingGlass className={styles.search_svg} />
        </div>
      </form>
    </div>
  );
}

export default Search_input;
