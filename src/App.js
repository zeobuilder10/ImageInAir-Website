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
                  I weep as so called gods burn my home asunder, One should never meet such fate and yet here I remain.
                  I hoped to see them smite me, make the suffering end, but alas their immense minds wouldn't show me such
                  pity. I wish someday to see my family once more, but I don't think the gods will let me, if they have not 
                  been cast aside already.
                </div>
              </div>
            )}
          </Popup>


        </div>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;
