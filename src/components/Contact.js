import React from 'react';
import ja from '../img/ja.png';

const Contact = () => {
  return (
    <div className="container-fluid contact__wrapper pb-5">
      <div className="row d-flex flex-wrap">
        <div className="col-12 col-md-6 w-100 contact__section mt-5">
          <h1 className="">Paweł Kościelny</h1>
          <hr />
          <img className="img-fluid my-5 " src={ja} alt="Pawel Koscielny" />
          <p className="contact__about mt-3 p-4 border ">
            Hey I'm Paul, I'm 26yrs old. I gradute of University of Science and
            Technology (AGH), where I got bachelor degree, of Mining and
            Geology. I was learning programing for about 1,5 year on my own. I
            also finished course "Front-End Developer", in "Centrum Szkoleń
            Informatycznych Vedius" in Cracow. <br />
            Presently I'm looking for best opportunities to growth my skills, by
            writing good and tidy code, druing curious projects.
          </p>
        </div>

        <div className="col-12 col-md-6 w-100 contact__section mt-5">
          <div className="contact__secondSection">
            <h1 className="">Contact me</h1>
            <hr />

            <ul className="list-group mx-auto py-5 contact__list">
              <li className="list-group-item">
                <i className="fas fa-phone mr-3" />
                <a href="tel:+48514719812">+48 514 719 812</a>
              </li>
              <li className="list-group-item">
                <i className="fas fa-envelope mr-3" />
                <a href="mailto:pawel.koscielny2904@gmail.com">
                  pawel.koscielny2904@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
