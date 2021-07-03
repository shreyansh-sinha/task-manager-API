console.log('Task Manager App')

const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const notFound = require('./middlewares/not-found')

// middlewares

//serving static files like index.html
app.use(express.static('./public')) 
app.use(express.json())

//routes

app.use('/api/v1/tasks', tasks)

app.use(notFound)
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		console.log('Connected to Database')
		app.listen(port, () => {
		console.log(`Listening to port ${port}`)
})
	}
	catch(error) {
		console.log(error)
	}
}

start()


