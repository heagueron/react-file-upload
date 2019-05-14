// Requires
const IncomingForm = require('formidable').IncomingForm


/* 
* The following callback functions will be called, 
* every time somebody hits the ‘/upload’ URL.
*/
module.exports = function upload(req, res) {

    var form = new IncomingForm()

    // Set the directory for placing file uploads in
    form.uploadDir = "C:/Users/USUARIO/file_up/uploaded";

    // The first callback is called for every file in the form
    form.on('file', (field, file) => { // Emitted whenever a field / file pair has been received
        // Do something with the file
        // e.g. save it to the database
        // we can access it using file.path
    })

    // The second callback is called when the form is completely parsed
    form.on('end', () => {
        res.json()
    }) 

    form.on('error', function(err) { // Emitted when there is an error processing the incoming form
        console.log(`Error receiving the file ... ${err}`)
    });
    
    // Trigger the parsing of the form
    form.parse(req)
    
}