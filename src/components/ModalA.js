import React, { useEffect, useState } from "react";
import {
  closeModal,
  toggleCheckbox,
//setCurrentContact,
} from "../redux/modal/modalActions";
import ModalC from "./ModalC";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const ModalA = () => {
  const dispatch = useDispatch();
  const checkboxChecked = useSelector((state) => state.modals.checkboxChecked);
  const [contacts, setContacts] = useState([]);
  const [openedContact, setOpenedContact] = useState(null);
  const [, setShowModalC] = useState(false); 

  useEffect(() => {

    // const loadContactsFromApi = async () => {
    //   try {
    //     const response = await axios.get(
    //       "https://api.dev.pastorsline.com/api/contacts.json",
    //       {
    //         headers: {
    //           Authorization:
    //             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4",
    //         },
    //         params: {
    //           companyId: 171,
    //           query: "",
    //           page: 1,
    //           countryId: 226,
    //         },
    //       }
    //     );

    //     const loadedContacts = response.data;
    //     setContacts(loadedContacts);
    //   } catch (error) {
    //     console.error("Помилка завантаження контактів з API:", error);
    //   }
    // };

    //loadContactsFromApi();
  }, [checkboxChecked]);

  const loadContactsFromApi = async () => {
    try {
      const response = await axios.get(
        "https://api.dev.pastorsline.com/api/contacts.json",
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4",
          },
          params: {
            companyId: 171,
            //query: "",
            page: 1,
            countryId: 226,
          },
        }
      );

      const loadedContacts = response.data;
      setContacts(loadedContacts);
    } catch (error) {
      console.error("Помилка завантаження контактів з API:", error);
    }
  };

  const filterContacts = (contactsData) => {
    if (checkboxChecked) {
      // Фильтруем контакты с четными ID
      return contactsData?.contacts_ids
        .filter((contactId) => contactId % 2 === 0)
        .map((contactId) => contactsData.contacts[contactId]);
    } else {
      return contactsData.contacts_ids.map(
        (contactId) => contactsData.contacts[contactId]
      );
    }
  };

  const openContact = (contact) => {
    setOpenedContact(contact);
    setShowModalC(true); 
  };

  const closeModalC = () => {
    setShowModalC(false); 
    setOpenedContact(null);
  };

  return (
    <div>
      <div className="modal fade show" id="exampleModalLive" aria-labelledby="exampleModalLiveLabel" tabIndex="-1" role="dialog" 
      style={{paddingRight: "15px", display: "block"}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal A</h5>
              <button
                type="button"
                className="close"
                onClick={() => dispatch(closeModal())}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
              <div className="d-flex justify-content-center">
                <div className="btn-group p-2" role="group">
                  <button type="button" className="btn btn-primary"  onClick={() => loadContactsFromApi()}>
                    Modal Button A
                  </button>
                  <button type="button" className="btn btn-primary">
                    Modal Button B
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => dispatch(closeModal())}
                  >
                    Modal Button C
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <label>
                  <input
                    type="checkbox"
                    checked={checkboxChecked}
                    onChange={(e) => dispatch(toggleCheckbox(e.target.checked))}
                  />
                  Only even
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        filterContacts(contacts)?.map((contact) => (
          <div key={contact.id}>
            <p>
              Name: {contact.first_name} {contact.last_name}
            </p>
            <p>Phone: {contact.phone_number}</p>
            <button onClick={() => openContact(contact)}>Open Contact</button>
          </div>
        ))
      )}

      {/* Відображення Modal C, якщо openedContact не дорівнює null */}
      {openedContact && (
        <ModalC contact={openedContact} closeModalC={closeModalC} />
      )}
    </div>
  );
};

export default ModalA;
