import React, { useEffect, useRef } from "react";
import s from "./Header.module.scss";
import logo from "../../images/logo.svg";
// import { Link } from "react-router-dom";

const Header = () => {
  const header = useRef(null);
  const stickyBlock = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (stickyBlock.current.getBoundingClientRect().top < 0) {
        stickyBlock.current.classList.add(s.ad);
        console.log(stickyBlock.current.getBoundingClientRect().bottom);
        console.log(stickyBlock.current.classList);
      }
    });
  }, [stickyBlock]);
  return (
    <div ref={header} className={s.header}>
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
          <div ref={stickyBlock} className={s["stickyBlock"] + " " + s.lite}>
            <div className={s.stickyBlock__wrapper}>
              <a className={s.stickyBlock__tel} href="tel:+375 (29) 113-69-69">
                +375 (29) 113-69-69
              </a>
              <button className={s.stickyBlock__callback + ' ' + s.lite}> заказать звонок </button>
              <button className={s.stickyBlock__basket}>
                <span className={s.stickyBlock__basket__num}>0</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
