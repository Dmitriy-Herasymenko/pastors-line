import React from "react";

const ModalC = ({ closeModalC, filterContacts, contacts, isLoading }) => {
  console.log("contacts", contacts);
  return (
    <div
      className="modal fade show"
      id="exampleModalLive"
      aria-labelledby="exampleModalLiveLabel"
      tabIndex="-2"
      role="dialog"
      style={{
        paddingRight: "15px",
        display: "block",
        zIndex: 9999,
        width: "100%",
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Content:</h5>
            <button
              type="button"
              className="close"
              onClick={() => closeModalC()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body ">
            <div className="d-flex justify-content-center">
              <div className="btn-group p-2" role="group">
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : contacts.length !== 0 ? (
                    filterContacts(contacts).map((contact) => {
                      console.log("contact1", contact);

                      return (
                        <span key={contact.id}>
                          <li style={{color: contact.color}}>
                            Name: {contact.first_name} {contact.last_name}
                          </li>
                          <li style={{color: contact.color}}>Phone: {contact.phone_number}</li>
                          <li style={{color: contact.color}}>Phone: {contact.full_phone_number}</li>
                          <li style={{color: contact.color}}>Email: {contact.email}</li>
                        </span>
                      );
                    })
                  ) : (
                    <p>No contacts found</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalC;
