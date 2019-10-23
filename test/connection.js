const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to the db before tests run
before((done)=>{
    //Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo')
            .then(()=>{
                console.log('----Connection has been made----'); 
                done();
            }).catch((error)=>{
                console.log("Connection Error", error); 
            });
});

//Drop the characters collectio before each test
beforeEach((done)=>{
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(()=>{
        done();
    });
});


