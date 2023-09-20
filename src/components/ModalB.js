import React from "react";
import { closeModal } from "../redux/modal/modalActions";
import { useDispatch } from 'react-redux';

const ModalB = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal B</h5>
              <button type="button" className="close" onClick={() => dispatch(closeModal())}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
            <div className="d-flex justify-content-center">
                <div className="btn-group p-2" role="group">
                  <button type="button" className="btn btn-primary">Modal Button A</button>
                  <button type="button" className="btn btn-primary">Modal Button B</button>
                  <button type="button" className="btn btn-secondary" onClick={() => dispatch(closeModal())}>Modal Button C</button>
                </div>
              </div>
              <div className="mt-3">
                <label>
                  <input type="checkbox" /> Only even
                </label>
              </div>
       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalB;
