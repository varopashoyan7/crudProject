const {Router} = require('express')
const config = require('config')
const Contact = require('../models/Contact')
const router = Router()

router.post('/generate', async (req, res) => {
  try {
    const {name,lastname,phone,location,nationality, picture,dob} = req.body;

    const contact = new Contact({
      name, lastname, phone, location, nationality, picture, dob
    });
    await contact.save();

    res.status(201).json({contact })
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again', "e": e })
  }
})

router.get('/',  async (req, res) => {
  try {
    const contact = await Contact.find();
    res.json(contact)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.json(contact)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again', e })
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const contact = await Contact.findOneAndDelete(req.params.id);
    res.json(contact)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again', e })
  }
})

router.patch('/edit/:id', async (req, res) => {
  try {
    const contact = await Contact.findById( req.params.id)
    contact.name = req.body.name

    await contact.save();
 
    res.status(201).json({contact })
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again', "e": e })
  }
})

module.exports = router
