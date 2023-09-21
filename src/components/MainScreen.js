import React from "react";
import { useSelector } from 'react-redux';
import { connect } from "react-redux";
import  ModalA  from "./ModalA";
import  ModalB  from "./ModalB";
import { setCurrentModal } from '../redux/modal/modalActions';

const MainScreen = ({ setCurrentModal }) => {

// const dispatch = useDispatch();
  const currentModal = useSelector(state => state.modals.currentModal); 

  const handleOpenModalA = () => {
    setCurrentModal('ModalA');
  };

  const handleOpenModalB = () => {
    setCurrentModal('ModalB');
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <button
            className="btn btn-primary btn-block"
            onClick={handleOpenModalA}
            style={{backgroundColor: "#46139f"}}
          >
            Button A
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-secondary btn-block"
            onClick={handleOpenModalB}
            style={{backgroundColor: "#ff7f50"}}
          >
            Button B
          </button>
        </div>
      </div>
      {currentModal === "ModalA" ? <ModalA /> : currentModal === "ModalB" ? <ModalB /> : null}
    </div>
  );
};

const mapDispatchToProps = {
  setCurrentModal,
};

export default connect(null, mapDispatchToProps)(MainScreen);
