const assert = require('assert');
const mongoose = require("mongoose");
const Author = require("../models/author");

describe('Nesting records', ()=>{

    beforeEach((done)=>{
        mongoose.connection.collections.authors.drop(()=>{
            done();
        });
    })

    it('Creates an author with sub-documents', (done)=>{
        
        var pat = new Author({
            name:"Patrick",
            books:[{
                title: 'Name of the Wind',
                pages: 400
            }]
        });

        pat.save().then(()=>{
            Author.findOne({name: 'Patrick'}).then((result)=>{
                assert(result.books.length === 1);
                done();
            });
        });
    });

    it('Adds a book to an author', (done)=>{
        
        var pat = new Author({
            name:"Patrick",
            books:[{
                title: 'Name of the Wind',
                pages: 400
            }]
        });

        pat.save().then(()=>{
            Author.findOne({name: 'Patrick'}).then((record)=>{
                //add a book to the books array
                record.books.push({title:'Wise man fear', pages:500});

                record.save().then(function(){
                    Author.findOne({name: 'Patrick'}).then((record)=>{
                        assert(record.books.length === 2);
                        done();
                    });
                });

            });
        });
    })
})