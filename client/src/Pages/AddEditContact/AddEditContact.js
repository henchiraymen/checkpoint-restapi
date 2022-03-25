import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addContact, editContact } from "../../JS/actions/contact";
import "./AddEditContact.css";

const AddEditContact = () => {
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const edit = useSelector((state) => state.contactReducer.edit);

  const contactRed = useSelector((state) => state.contactReducer.contact);

  useEffect(() => {
    edit
      ? setContact(contactRed)
      : setContact({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
        });
  }, [edit, contactRed]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter contact firstname"
            name="firstname"
            value={contact.firstname}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">firstname is required !</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter contact lastname"
            name="lastname"
            value={contact.lastname}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">lastname is required !</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter contact email"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">email is required !</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter contact phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </Form.Group>
        {edit ? (
          <Link to="/">
            <Button
              variant="primary"
              onClick={() => dispatch(editContact(contact._id, contact))}
            >
              {" "}
              Edit Contact
            </Button>
          </Link>
        ) : (
          <Link to="/">
            <Button
              variant="primary"
              onClick={() => dispatch(addContact(contact))}
            >
              Add Contact
            </Button>
          </Link>
        )}
      </Form>
    </div>
  );
};

export default AddEditContact;
