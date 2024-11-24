/* eslint-disable max-len */
import React from 'react';
import './Footer.scss';
import { scrollToTop } from '../../api/client';

export const Footer: React.FC = ({}) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li>
            <a
              className="footer__link"
              target="_blanc"
              href="https://www.instagram.com/vitalii_boxing_?igsh=MXZwMm15ZmQzdmJ2cw=="
            >
              Instagram
            </a>
          </li>

          <li>
            <a
              className="footer__link"
              target="_blanc"
              href="https://wa.me/380509987274"
            >
              WhatsApp
            </a>
          </li>

          <li>
            <a
              className="footer__link footer__link--location"
              target="_blanc"
              href="https://www.google.com/maps/place/%D0%9A%D0%B0%D1%80%D0%B8%D0%BD%D1%82%D1%96%D1%8F,+%D0%90%D0%B2%D1%81%D1%82%D1%80%D1%96%D1%8F/@46.8664514,13.717519,9.82z/data=!4m6!3m5!1s0x47707498a689f517:0xd95ab93dad9ec93f!8m2!3d46.722203!4d14.1805882!16zL20vMDFncHk0?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D"
            >
              Carinthia, Austria
            </a>
          </li>
        </ul>

        <button className="button-top" onClick={scrollToTop}></button>
      </div>

      <div className="footer__decor"></div>

      <div className="footer__creators creators">
        <a
          className="creators__link"
          href="https://www.linkedin.com/in/viktoriia-vynohradova-a5a217332"
          target="_blanc"
        >
          <p className="creators__position">frontend</p>
          <p className="creators__name">Viktoriia Vynohradova</p>
        </a>

        <a
          className="creators__link"
          href="https://www.behance.net/maripetr1"
          target="_blanc"
        >
          <p className="creators__position">design</p>
          <p className="creators__name">Maryna Petrenko</p>
        </a>

        <a
          className="creators__link"
          href="https://github.com/dizizzz"
          target="_blanc"
        >
          <p className="creators__position">backend</p>
          <p className="creators__name">Solomia Bobyak</p>
        </a>
      </div>
    </footer>
  );
};
