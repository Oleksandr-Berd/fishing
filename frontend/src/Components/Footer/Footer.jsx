import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <p style={{ marginBottom: "0" }}>© Copyright Fishing 2023</p>
      <address className={css.adress}>
        <ul className={css.adressList}>
          <li>
            <a href="mailto:alex.berd86@gmail.com">alex.berd86@gmail.com</a>
          </li>
          <li>
            <a href="tel:+380673588786">+38 067 358 87 86</a>
          </li>
        </ul>
      </address>
    </footer>
  );
};
