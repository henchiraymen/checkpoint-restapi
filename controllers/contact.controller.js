// add Contact
const addContact = async (req, res) => {
  try {
    const newContact = req.body;
    // test name not empty
    if (!newContact.firstname) {
      return res.status(400).send({ msg: "firstname is required !!!!! " });
    }
    if (!newContact.lastname) {
      return res.status(400).send({ msg: "lastname is required !!!!! " });
    }
    // test email not empty
    if (!newContact.email) {
      return res.status(400).send({ msg: "email is required !!!!! " });
    }
    //test email existing
    const contactToFind = await Contact.findOne({ email: newContact.email });
    if (contactToFind) {
      return res.status(400).send({ msg: "Contact already exist !!!!! " });
    }
    // create new document and save it in the DB
    const contactToAdd = new Contact(newContact);
    await contactToAdd.save();
    res
      .status(200)
      .send({ msg: "Contact added successfully ... ", contactToAdd });
  } catch (error) {
    res.status(400).send({ msg: "Contact adding fail ... ", error });
  }
};

// Get All Contacts
const getAllContacts = async (req, res) => {
  try {
    const contactList = await Contact.find();
    res.status(200).send({ msg: "contacts load successfuly", contactList });
  } catch (error) {
    res.status(400).send({ msg: "contacts load fail ... ", error });
  }
};

// delete contact
const deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    await Contact.deleteOne({ _id: contactId });
    res.status(200).send({ msg: "contact deleted successfuly ..." });
  } catch (error) {
    res.status(400).send({ msg: "contact deleted fail !!! ", error });
  }
};

//update contact
const updateContact = async (req, res) => {
  try {
    const { _id } = req.params;
    const newContact = req.body;
    const result = await Contact.updateOne(
      { _id },
      { $set: { ...newContact } }
    );
    if (result.modifiedCount === 0) {
      return res.status(400).send({ msg: "contact already updated !!! " });
    }
    res.status(200).send({ msg: "contact updated successfuly ...", result });
  } catch (error) {
    res.status(400).send({ msg: "can not update the contact !!! ", error });
  }
};

// get contact by id
const getContactById = async (req, res) => {
  try {
    const { _id } = req.params;
    const contactToFind = await Contact.findOne({ _id });
    res
      .status(200)
      .send({ msg: "contact find successfuly ...", contactToFind });
  } catch (error) {
    res.status(400).send({ msg: "can not find the contact !!! ", error });
  }
};

module.exports = controllers = {
  addContact,
  getAllContacts,
  deleteContact,
  updateContact,
  getContactById
};
