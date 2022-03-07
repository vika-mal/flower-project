import React from "react";
import s from "./Header.module.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.header__wrapper}>
          <a href="/" className={s.logo}>
            <img className={s.logo__img} src={logo} alt="logo" />
          </a>
          <div className={s.nav}>
            <ul className={s.nav__list}>
              <li className={s.nav__item}>
                <a href="/catalog" className={s.nav__link}>
                  Каталог
                </a>
              </li>
              <li className={s.nav__item}>
                <a href="/catalog" className={s.nav__link}>
                  Доставка и оплата{" "}
                </a>
              </li>
              <li className={s.nav__item}>
                <a href="/catalog" className={s.nav__link}>
                  О нас
                </a>
              </li>
              <li className={s.nav__item}>
                <a href="/catalog" className={s.nav__link}>
                  Контакты
                </a>
              </li>
              <li className={s.nav__item}>
                <a href="/catalog" className={s.nav__link}>
                  FAQ
                </a>
              </li>
              <li className={s.nav__item}>
                <a href="/catalog" className={s.nav__link}>
                  поиск
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
