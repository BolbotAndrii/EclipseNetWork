const express = require('express')
const config = require('config')
const path  = require('path')
// init app
const app = express()


// init port
const PORT = config.get('port') || 6000



// // init static folder
//
app.use( express.static('./') )



if ( process.env.NODE_ENV === 'production' ) {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile( path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const start = async () => {
    try {

        app.listen( PORT, () => console.log(`Started at port: ${PORT}`) )

    } catch (err) {
        console.log('Server Error', err.message)
        process.exit(1)
    }
}

start()

