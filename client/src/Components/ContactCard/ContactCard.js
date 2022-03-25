import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import {
  deleteContact,
  getContact,
  toggleTrue,
} from "../../JS/actions/contact";
import userImage from "../../assets/user.png";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={userImage} />
        <Card.Body>
          <h3>
            {contact.firstname} {contact.lastname}
          </h3>
          <h4>{contact.email}</h4>
          <h4>{contact.phone}</h4>
          <div>
            <Link to={`/editContact/${contact._id}`}>
              <Button
                variant="primary"
                onClick={() => {
                  dispatch(toggleTrue());
                  dispatch(getContact(contact._id));
                }}
              >
                Edit Contact
              </Button>
            </Link>

            <Button
              onClick={() => dispatch(deleteContact(contact._id))}
              variant="danger"
            >
              Delete Contact
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
