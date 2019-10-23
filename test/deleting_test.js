const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Deleting records', ()=>{

    let char;

    beforeEach((done)=>{
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(()=>{
            done();
        });
    })
    
    //Delete one record
    it('Deletes one a record from the databases', (done)=>{
        
        MarioChar.findOneAndRemove({name:'Mario'}).then(()=>{
            MarioChar.findOne({name:'Mario'}).then((result)=>{
                assert(result === null);
                done();
            });
        });
    });
});