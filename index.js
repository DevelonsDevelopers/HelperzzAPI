const express = require('express')
const cors = require('cors')
const database = require('./util/database')
const path = require("path");
const multer = require('multer')
require('dotenv').config()
const {Server} = require("socket.io");
const { createServer } = require('http')

const app = express()
const server = createServer(app)
const io = new Server(server,
    {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            credentials: true,
        }
    }
)

io.on("connection", (socket) => {
    console.log("SOCKET IO CONNECTION SUCCESSFUL!")
})

global.io = io

const errorController = require('./controllers/error')

const emailService = require('./routes/emailService')

const userAuthentication = require('./routes/userAuthentication')
const customerAuthentication = require('./routes/customerAuthentication')

const category = require('./routes/category')
const city = require('./routes/city')
const costGuides = require('./routes/costGuide')
const contractor = require('./routes/contractor')
const testimonial = require('./routes/testimonial')
const blog = require('./routes/blog')
const user = require('./routes/user')
const subcategories = require('./routes/subcategory')
const serviceRequests = require('./routes/serviceRequest')
const serviceRequestContractor = require('./routes/requestContractor')
const customer = require('./routes/customer')
const reviews = require('./routes/contractorReviews')
const highlights = require('./routes/highlight')
const languages = require('./routes/language')
const successStories = require('./routes/successStories')
const contractorRequests = require('./routes/contractorRequest')

const port = process.env.PORT || 5050

app.use(express.json())
app.use(cors())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage})

database.getConnection().then(connection => {

    app.get('/', (req, res) => {
        res.status(401).json({message: "Unauthorized Access"})
    })

    app.post('/api/upload/image', upload.single('file'), (req, res) => {
        res.status(200).json({responseCode: 200, message: "File uploaded", fileName: req.file.filename})
    })

    app.use('/images', express.static(path.join(__dirname, 'public/uploads')));

    app.use('/api/auth/user', userAuthentication)
    app.use('/api/auth/customer', customerAuthentication)

    app.use('/api/categories', category)
    app.use('/api/cities', city)
    app.use('/api/costGuides', costGuides)
    app.use('/api/contractors', contractor)
    app.use('/api/customers', customer)
    app.use('/api/reviews', reviews)
    app.use('/api/highlights', highlights)
    app.use("/api/languages", languages)
    app.use('/api/testimonials', testimonial)
    app.use('/api/blogs', blog)
    app.use('/api/users', user)
    app.use('/api/subcategories', subcategories)
    app.use('/api/serviceRequests', serviceRequests)
    app.use('/api/requestContractor', serviceRequestContractor)
    app.use('/api/successStory', successStories)
    app.use('/api/contractorRequests', contractorRequests)
    app.use('/api/mailer', emailService)

    app.use(errorController.get404)
    app.use(errorController.get500)

    server.listen(port, () => {
        console.log("Connection Successful! Server is running!")
    })
}).catch(error => {
    console.log("Unable to connect with MySQL! Error in MySQL configuration")
})
