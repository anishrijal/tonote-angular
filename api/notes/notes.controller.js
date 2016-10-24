module.exports={
  getNotes:function(req,res,next){
    var notes=[
      {'title':"default",
      'description':"this is default ",
      'create':"today"}
    ]

    res.send(notes)
  }
}
