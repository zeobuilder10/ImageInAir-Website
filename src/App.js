import { FaInfoCircle } from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './App.css';

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
                  par les utilisateurs de l'application mobile. 
                </div>
              </div>
            )}
          </Popup>


        </div>
      </header>
      <body>
        <div className="row_image">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
        <div className="row_image">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
        <div className="row_image">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
        <div className="row_image">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
      </body>
    </div>
  );
}

export default App;
