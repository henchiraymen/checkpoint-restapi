import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getContacts } from "../../JS/actions/contact";
import ContactCard from "../../Components/ContactCard/ContactCard";

import "./ContactList.css";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactReducer.contactList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div className="contactlist">
      {contactList.map((contact) => (
        <ContactCard contact={contact} key={contact._id} />
      ))}
    </div>
  );
};

export default ContactList;
