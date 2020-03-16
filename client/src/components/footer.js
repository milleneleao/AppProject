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
    <div className=" bg-light" style={{ position: "absolute", bottom: "0", width: "100%", height: "2.5rem" }}>
      <div className="row  pt-2">
        <div className="col-3 ">
        <Link to="/about" className="p-5">About</Link>
        <Link to="/aboutproject" >About the project</Link>
        </div>
        <div className="col-6 text-right ">
          <p className="text-project-color-2 pr-5">&copy;2020 - Group2.</p>
        </div>
      </div>
    </div>
  );
}
