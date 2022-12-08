import "./header.scss";
import {FC} from 'react';

const Header:FC = () => {
  return (
    <section className="header">
      <h2 className="header__title">Адвент</h2>
      <h3 className="header__subtitle">Календарь</h3>
      <p className="header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit roin feugiat molestie tortor.</p>
    </section>
  );
};

export default Header;
