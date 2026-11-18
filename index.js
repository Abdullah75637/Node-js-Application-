 
import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
    return res.json({ msg: 'My name is Abdullah Shoukat, and I am a 6th-semester BS Computer Science student at the University of Layyah. I am passionate about Cloud Computing, AWS, and DevOps.' })
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`)
})
