const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))
app.use(express.static('client'))
app.use('/api/contact', require('./routes/contact.routes'))
app.use('/client', express.static(__dirname + '/client'))

  app.get('', (req, res) => {
    res.sendFile(path.resolve(__dirname + "/client/index.html"))
  }

  )
  app.get('', (req, res) => {
    res.sendFile(path.resolve(__dirname + "/client/contacts.html"))
  }

  )
const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()