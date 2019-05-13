// Requires
const IncomingForm = require('formidable').IncomingForm


/* 
* The following callback functions will be called, 
* every time somebody hits the ‘/upload’ URL.
*/
module.exports = function upload(req, res) {

    var form = new IncomingForm()

    // The first callback is called for every file in the form
    form.on('file', (field, file) => {
        // Do something with the file
        // e.g. save it to the database
        // you can access it using file.path
    })

    // The second callback is called when the form is completely parsed
    form.on('end', () => {
        res.json()
    }) 

    // We trigger the parsing of the form using
    form.parse(req)
    
}