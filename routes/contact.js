// require express
const express = require("express");

// require Conatct
const Contact = require("../model/Contact");

// require Router
const router = express.Router();

// require controllers
const controllers = require("../controllers/contact.controller");

/**
 * @desc : add new contact
 * @method : POST
 * @path : 'http://localhost:5000/api/contacts/'
 * @data : req.body
 */
router.post("/", controllers.addContact);

/**
 * @desc : get all contacts
 * @method : GET
 * @path : 'http://localhost:5000/api/contacts/'
 * @data : req.body
 */
router.get("/", controllers.getAllContacts);

/**
 * @desc : delete one contact
 * @method : DELETE
 * @path : 'http://localhost:5000/api/contacts/:id'
 * @data : req.params
 */
router.delete("/:id", controllers.deleteContact);

/**
 * @desc : get contact by id
 * @method : GET
 * @path : 'http://localhost:5000/api/contacts/:_id'
 * @data : req.params
 */
router.get("/:_id", controllers.getContactById);

/**
 * @desc : update contact
 * @method : PUT
 * @path : 'http://localhost:5000/api/contacts/:_id'
 * @data : req.params and req.body
 */
router.put("/:_id", controllers.updateContact);

module.exports = router;
