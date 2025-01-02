import { useState } from 'react';
import Hamburger from '../hamburger/hamburger.component';
import Search_input from '../search_input/search_input.component';
import styles from './nav_bar.module.scss';
import { nav_links } from '../../data';

function Nav_bar() {
  const [is_nav_open, set_is_nav_open] = useState(false);

  function handle_navbar() {
    set_is_nav_open((prev) => !prev);
  }

  const nav_link_elements = nav_links.map((link) => {
    const { id, label } = link;
    return (
      <li
        key={id}
        className={`${styles.sidebar_individual_link} position_relative`}
      >
        <a href="#" className={`${styles.link_label}`}>
          {label}
        </a>
      </li>
    );
  });
  return (
    <>
      <nav>
        <div className="container position_relativ">
          <div
            className={`${styles.nav_bar_container} flex_items g_ position_relative padding_all_around_ bg_dark`}
          >
            <div
              className={`${styles.logo} flex_items align_middle align_horizontal position_relativ`}
            >
              <div className="logo_lines">
                <div className={styles.logo_1}></div>
                <div className={styles.logo_2}></div>
                <div className={styles.logo_3}></div>
              </div>
              <span className={`${styles.logo_text} heading_3`}>
                architecture
              </span>
            </div>
            <div className="search_bar_and_nav_menu item_end flex_items align_middle g_2">
              <div className={`${styles.search_input}`}>
                <Search_input
                  placeholder="What are you looking for?"
                  background="dark"
                />
              </div>
              <div
                className={`${styles.hamburger_menu}`}
                onClick={handle_navbar}
              >
                <Hamburger is_nav_open={is_nav_open} />
              </div>
              <div
                className={`${styles.side_nav} ${
                  is_nav_open ? styles.show_side_nav : ''
                } flex_items flex_column align_middle align_horizonta g_2 bg_black`}
              >
                {nav_link_elements}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav_bar;
