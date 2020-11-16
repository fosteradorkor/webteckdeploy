var express = require('express')

var app = express()

var fetch = require('node-fetch')



//setting templating engine
app.set('view engine', 'ejs');

// setup static files
app.use(express.static('public'));


app.get('/', (request, response) => {
    response.render('acity.ejs',
        // Javascript object : JSON
        {
            "dog": "Foster",
            "fish": "Getrude"
        }
    );
});


app.get('/users', (request, response) => {

    // JS promise
    fetch('https://randomuser.me/api/?results=50')

        .then(val => val.json())
        .then(val => {
            response.render('users.ejs', {
                data: val.results
            })
        })

})

app.listen( process.env.PORT || 5000)






// var d = [
//     {
//         name: "foster",
//         age: 12.5,
//         hobbies: ["eating", "sleeping"]
//     }
// ]

