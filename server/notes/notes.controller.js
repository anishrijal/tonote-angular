var Note = require("./notes.model.js");
var mongoose = require("mongoose");

var interface = {
    getList: function(req,res,next){
        Note.find({})
            .then(function(notes){
                res.send(notes)
            })
            .catch(function(err){
                console.log(err);
                res.status(400).send(err);
            });
    },
    save: function(req,res,next){
        var id = req.params.id;
        if(!id) {
            id=new mongoose.mongo.ObjectID()
        }
        console.log(id);
        Note.findOneAndUpdate({_id:id},req.body,{upsert:true,new:true})
            .then(function(notes){
                console.log(notes)
                res.send(notes)
            })
            .catch(function(err){
                console.log(err);
                res.status(400).send(err);
            });
    },
    delete: function(req,res,next){
        var id = req.params.id;
        Note.find({_id:id}).remove()
            .then(function(){
                res.send("note deleted")
            })
            .catch(function(err){
                console.log(err);
                res.status(400).send(err);
            });
    }
};


module.exports = interface;
