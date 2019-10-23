const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Finding records', ()=>{

    let char;

    beforeEach((done)=>{
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(()=>{
            done();
        });
    })
    
    //Find one record
    it('Finds one a record from the databases', (done)=>{
        
        MarioChar.findOne({name:'Mario'}).then((result)=>{
            assert(result.name === 'Mario');
            done();
        });

    });

    //Find by ID
    it('Finds one a record by Id from the databases', (done)=>{
        
        MarioChar.findOne({_id:char._id}).then((result)=>{
            assert(result._id.toString() === char._id.toString());
            done();
        });

    });



});