import { SocialIcon } from "react-social-icons";
import React from "react";

import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <p style={{ marginBottom: "0" }}>© Copyright Fishing 2023 test</p>
      <address className={css.adress}>
        <ul className={css.adressList}></ul>
        <ul className={css.socList}>
          <li className={css.socItem}>
            <SocialIcon
              url="https://www.facebook.com/sasha.berdichevsky"
              style={{ width: 36, height: 36 }}
              fgColor="#fff"
            />
          </li>
          <li className={css.socItem}>
            <SocialIcon
              url="https://www.linkedin.com/in/oleksandr-berdychevskyi-83336761/"
              style={{ width: 36, height: 36 }}
              fgColor="#fff"
            />
          </li>
          <li className={css.socItem}>
            <SocialIcon
              url="https://github.com/Oleksandr-Berd"
              style={{ width: 36, height: 36 }}
              fgColor="#fff"
            />
          </li>
          <li className={css.socItem}>
            <SocialIcon
              url="https://twitter.com/UaBerd"
              style={{ width: 36, height: 36 }}
              fgColor="#fff"
            />
          </li>
        </ul>
      </address>
    </footer>
  );
};
