import React from 'react';
import { Link } from "react-router-dom";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './languages/en';
import uk from './languages/uk';
import br from './languages/br';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.registerTranslations('br', br);


export default function Footer() {
  return (
    <footer className="bg-light">
        <div className="row mt-3">
          <div className="col-md-4 text-dark mt-2 loat-left">
            <div className="my-2 ml-3">
              <p className="footer-links font-weight-bold">
                <Link to="/about" className="pr-5"><Translate content="about" /></Link>
                <Link to="/aboutproject" ><Translate content="aboutp" /></Link>
              </p>
            </div>
          </div>
          <div className="col-md-4">
          </div>
          <div className="col-md-4  mt-2  text-dark">
            <p className="my-2 mr-3 float-right" >&copy;2020 - Group2.</p>
          </div>
        </div>

    </footer>
  );
}
