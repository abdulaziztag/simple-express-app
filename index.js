import express from 'express'
import path from 'path'
import router from './routes/servers.js'
import {requestTime, logger} from './midlewares.js'

const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT ?? 3000

app.set('view engine', 'ejs')

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime)
app.use(logger)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(router)

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Main',
    active: 'main'
  })
})

app.get('/features', (req, res) => {
  res.render('features', {
    title: 'Features',
    active: 'features'
  })
})



app.listen(PORT, () => {
  console.log(`Working in ${PORT}...`)
})
