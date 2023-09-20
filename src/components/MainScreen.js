import React from "react";
import { connect } from "react-redux";
import {
  openModalA,
  closeModalA,
  openModalB,
  closeModalB,
} from "../redux/modal/modalActions";

const MainScreen = ({
  showModalA,
  showModalB,
  openModalA,
  closeModalA,
  openModalB,
  closeModalB,
}) => {
  const handleOpenModalA = () => {
    openModalA();
    console.log("startModalA");
  };

  const handleCloseModalA = () => {
    closeModalA();
    console.log("closeModalA");
  };

  const handleOpenModalB = () => {
    openModalB();
    console.log("startModalB");
  };

  const handleCloseModalB = () => {
    closeModalB();
    console.log("closeModalB");
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <button
            className="btn btn-primary btn-block"
            onClick={showModalA ? handleCloseModalA : handleOpenModalA}
          >
            Button A
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-secondary btn-block"
            onClick={showModalB ? handleCloseModalB : handleOpenModalB}
          >
            Button B
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  showModalA: state.modals.showModalA,
  showModalB: state.modals.showModalB,
});

const mapDispatchToProps = {
  openModalA,
  closeModalA,
  openModalB,
  closeModalB,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
