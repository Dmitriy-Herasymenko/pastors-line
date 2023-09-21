import React from "react";

const ModalC = ({ contact, closeModalC }) => {
  return (
    <div
      className="modal fade show"
      id="exampleModalLive"
      aria-labelledby="exampleModalLiveLabel"
      tabIndex="-1"
      role="dialog"
      style={{ paddingRight: "15px", display: "block" }}
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
                <h3>Contact Details</h3>
                <p>Name: {contact.name}</p>
                <p>Phone: {contact.phone}</p>
                <button onClick={closeModalC}>Close Modal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <h3>Contact Details</h3>
    //   <p>Name: {contact.name}</p>
    //   <p>Phone: {contact.phone}</p>
    //   <button onClick={closeModalC}>Close Modal</button>
    // </div>
  );
};

export default ModalC;

// {
//     "found_archived": true,
//     "found_blocked": false,
//     "total": 66,
//     "contacts_ids": [
//         828886,
//         1816369,

//     ],
//     "contacts": {
//         "828886": {
//             "id": 828886,
//             "first_name": "i name",
//             "last_name": "i",
//             "email": null,
//             "phone_number": "4345345435",
//             "country_id": 226,
//             "comment": "",
//             "status": 0,
//             "color": "#e67e22",
//             "address": "",
//             "birthday": null,
//             "is_ccb": 0,
//             "is_pco": 0,
//             "is_mc": 0,
//             "is_elvanto": 0,
//             "is_breeze": 0,
//             "is_rock": null,
//             "is_duplicate": 0,
//             "has_duplicate": 1,
//             "is_pco_pending": 0,
//             "unsub_by_user_id": 0,
//             "is_hold_contact": 0,
//             "is_hold_contact_read": 0,
//             "is_contact_deleted": 0,
//             "is_contact_mark_deleted": 0,
//             "is_archived": 0,
//             "is_favorite": 0,
//             "user_id": 171,
//             "master_contact_id": 47718,
//             "country": {
//                 "id": 226,
//                 "phonecode": 1,
//                 "iso": "US"
//             },
//             "number_lookup": {
//                 "id": 3527,
//                 "type": "mobile",
//                 "data": "{\"carrier\":{\"mobile_country_code\":\"310\",\"mobile_network_code\":\"800\",\"name\":\"T-Mobile\",\"type\":\"mobile\",\"error_code\":null},\"callerName\":null,\"countryCode\":\"US\"}"
//             },
//             "contact_groups": [
//                 {
//                     "is_contact_moved": 0,
//                     "do_not_call": 0,
//                     "opted_in": "2021-03-17T10:57:26+00:00",
//                     "group": {
//                         "id": 977,
//                         "group_name": "All People",
//                         "is_archived": 0
//                     },
//                     "tag": null,
//                     "sync_state": null,
//                     "is_hold_contact": 0

//             ],
//             "do_not_call": 0,
//             "is_number_favorite": 0,
//             "contacts_ids": [
//                 828886
//             ],
//             "primary_contact_id": 828886,
//             "primary_contact_ids": [
//                 828886
//             ],
//             "primary_contact_ids_by_app": {
//                 "pastorsline": 828886
//             },
//             "multiple_primary_contacts": 0,
//             "is_primary": true,
//             "app_contact_ids": [
//                 828886
//             ],
//             "inaccessible": false,
//             "external_url": null
//         },
//         "1816369": {
//             "id": 1816369,
//             "first_name": "first name",
//             "last_name": "last 2asf 2",
//             "email": "dmitriy.nagu.lin@gmail.com",
//             "phone_number": "515994980",
//             "country_id": 226,
//             "comment": "",
//             "status": 0,
//             "color": "#e74c3c",
//             "address": "",
//             "birthday": "1993-03-02T00:00:00+00:00",
//             "is_ccb": 0,
//             "is_pco": 0,
//             "is_mc": 0,
//             "is_elvanto": 0,
//             "is_breeze": 0,
//             "is_rock": 1,
//             "is_duplicate": 0,
//             "has_duplicate": 1,
//             "is_pco_pending": 0,
//             "unsub_by_user_id": 0,
//             "is_hold_contact": 0,
//             "is_hold_contact_read": 0,
//             "is_contact_deleted": 0,
//             "is_contact_mark_deleted": 0,
//             "is_archived": 0,
//             "is_favorite": 0,
//             "user_id": 171,
//             "master_contact_id": 440476,
//             "country": {
//                 "id": 226,
//                 "phonecode": 1,
//                 "iso": "US"
//             },
//             "number_lookup": null,
//             "contact_groups": [
//                 {
//                     "is_contact_moved": 0,
//                     "do_not_call": 0,
//                     "opted_in": "2023-08-07T08:12:08+00:00",
//                     "group": {
//                         "id": 977,
//                         "group_name": "All People",
//                         "is_archived": 0
//                     },
//                     "tag": null,
//                     "sync_state": null,
//                     "is_hold_contact": 0
//                 }
//             ],
//             "do_not_call": 0,
//             "is_number_favorite": 0,
//             "contacts_ids": [
//                 1816369
//             ],
//             "primary_contact_id": 1816369,
//             "primary_contact_ids": [
//                 1816369
//             ],
//             "primary_contact_ids_by_app": {
//                 "rock": 1816369
//             },
//             "multiple_primary_contacts": 0,
//             "is_primary": true,
//             "app_contact_ids": [
//                 1816369
//             ],
//             "inaccessible": false,
//             "external_url": "https://rock.rocksolidchurchdemo.com/Person/54"
//         },
//         "1764870": {
//             "id": 1764870,
//             "first_name": "Firstname5",
//             "last_name": "Lastname5",
//             "email": "Firstname5Lastname5@example.com",
//             "phone_number": "23457005",
//             "country_id": 226,
//             "comment": "",
//             "status": 0,
//             "color": "#95a5a6",
//             "address": "",
//             "birthday": "1997-10-20T00:00:00+00:00",
//             "is_ccb": 0,
//             "is_pco": 0,
//             "is_mc": 0,
//             "is_elvanto": 0,
//             "is_breeze": 0,
//             "is_rock": null,
//             "is_duplicate": 0,
//             "has_duplicate": 1,
//             "is_pco_pending": 0,
//             "unsub_by_user_id": 0,
//             "is_hold_contact": 0,
//             "is_hold_contact_read": 0,
//             "is_contact_deleted": 0,
//             "is_contact_mark_deleted": 0,
//             "is_archived": 0,
//             "is_favorite": 0,
//             "user_id": 171,
//             "master_contact_id": 413555,
//             "country": {
//                 "id": 226,
//                 "phonecode": 1,
//                 "iso": "US"
//             },
//             "number_lookup": null,
//             "contact_groups": [
//                 {
//                     "is_contact_moved": 0,
//                     "do_not_call": 0,
//                     "opted_in": "2023-06-13T06:51:41+00:00",
//                     "group": {
//                         "id": 25293,
//                         "group_name": "samename",
//                         "is_archived": 0
//                     },
//                     "tag": null,
//                     "sync_state": null,
//                     "is_hold_contact": 0
//                 },
//                 {
//                     "is_contact_moved": 0,
//                     "do_not_call": 0,
//                     "opted_in": "2023-06-13T06:51:41+00:00",
//                     "group": {
//                         "id": 25294,
//                         "group_name": "Imported (2023-06-13) - import-contacts-5",
//                         "is_archived": 0
//                     },
//                     "tag": null,
//                     "sync_state": null,
//                     "is_hold_contact": 0
//                 },
//                 {
//                     "is_contact_moved": 0,
//                     "do_not_call": 0,
//                     "opted_in": "2023-06-13T06:51:41+00:00",
//                     "group": {
//                         "id": 977,
//                         "group_name": "All People",
//                         "is_archived": 0
//                     },
//                     "tag": null,
//                     "sync_state": null,
//                     "is_hold_contact": 0
//                 },
//                 {
//                     "is_contact_moved": 0,
//                     "do_not_call": 0,
//                     "opted_in": "2023-06-13T06:55:31+00:00",
//                     "group": {
//                         "id": 25295,
//                         "group_name": "newname",
//                         "is_archived": 0
//                     },
//                     "tag": null,
//                     "sync_state": null,
//                     "is_hold_contact": 0
//                 },
//                 {
//                     "is_contact_moved": 0,
//                     "do_not_call": 0,
//                     "opted_in": "2023-06-13T06:55:31+00:00",
//                     "group": {
//                         "id": 25296,
//                         "group_name": "import-contacts-5 (2023-06-13) - 1",
//                         "is_archived": 0
//                     },
//                     "tag": null,
//                     "sync_state": null,
//                     "is_hold_contact": 0
//                 }
//             ],
//             "do_not_call": 0,
//             "is_number_favorite": 0,
//             "contacts_ids": [
//                 1764870
//             ],
//             "primary_contact_id": 1764870,
//             "primary_contact_ids": [
//                 1764870
//             ],
//             "primary_contact_ids_by_app": {
//                 "pastorsline": 1764870
//             },
//             "multiple_primary_contacts": 0,
//             "is_primary": true,
//             "app_contact_ids": [
//                 1764870
//             ],
//             "inaccessible": false,
//             "external_url": null

//     }
// }
