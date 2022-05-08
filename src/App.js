import { FaInfoCircle } from "react-icons/fa";
import Popup from 'reactjs-popup';
import ImageInside from "./components/imageinside";
import 'reactjs-popup/dist/index.css';
import './App.css';

/* fait un flex wrap trouduc */

function App() {
  return (
    <div>
      <header>
        <div className="Div-header">
          <div className="Gho-header"></div>
          <p className="Title">Image In Air</p>


          <Popup trigger={<button className="But-header"><FaInfoCircle className='Ico-header' size={50} /></button>} modal nested>
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Informations </div>
                <div className="content">
                  ImageInAir est une application de partage d'image en ligne, l'application web permet de visionner les images posté
                  par les utilisateurs de l'application mobile. Ceci étant un prototype, la database permettant de récupérer les images
                  poster par les utilisateurs n'est donc pas en ligne, cependant nous affichons quand même quelques images afin de
                  démontrer la fonctionnalitée principale du site.
                </div>
              </div>
            )}
          </Popup>


        </div>
      </header>
      <body>
        <div>
          <ImageInside />
        </div>
      </body>
    </div>
  );
}

export default App;