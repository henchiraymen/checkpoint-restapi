import axios from "axios";
import {
  ADD_CONTACT_FAIL,
  ADD_CONTACT_SUCC,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCC,
  EDIT_CONTACT_FAIL,
  EDIT_CONTACT_SUCC,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCC,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
  GET_CONTACT_SUCC,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../actionsTypes/contact";

// get contacts
export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    let result = await axios.get("/api/contacts");
    dispatch({ type: GET_CONTACTS_SUCC, payload: result.data.contactList });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data });
  }
};

//delete contact
export const deleteContact = (contactId) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/${contactId}`);
    dispatch({ type: DELETE_CONTACT_SUCC });
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: DELETE_CONTACT_FAIL, payload: error.response.data });
  }
};

//add contact
export const addContact = (newContact) => async (dispatch) => {
  try {
    await axios.post("/api/contacts", newContact);
    dispatch({ type: ADD_CONTACT_SUCC });
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: ADD_CONTACT_FAIL, payload: error.response.data });
  }
};

//tggle true
export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};

//tggle false
export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};

// get contact
export const getContact = (contactId) => async (dispatch) => {
  dispatch({ type: GET_CONTACT_LOAD });
  try {
    let result = await axios.get(`/api/contacts/${contactId}`);
    dispatch({ type: GET_CONTACT_SUCC, payload: result.data.contactToFind });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error.response.data });
  }
};

//edit contact
export const editContact = (contactId, newContact) => async (dispatch) => {
  try {
    await axios.put(`/api/contacts/${contactId}`, newContact);
    dispatch({ type: EDIT_CONTACT_SUCC });
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: EDIT_CONTACT_FAIL, payload: error.response.data });
  }
};
