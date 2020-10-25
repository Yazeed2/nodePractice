const router = require('express').Router();
const connection = require('../config/database');
const Post = connection.models.Post;

router.get('/', (req, res, next)=> {
    Post.find()
    .then(data =>  {
        res.send(data)
    }).catch(err=> { 
       throw new Error(err)
    })
})

router.post('/',(req, res)=> {
   if( req.isAuthenticated()){
       let id =  req.user._id
        Post.create({text: req.body.text})
        res.redirect('/post')
   }else{ 
       res.status(404).json({msg:"you can't access this route try login "})
   }
} )

router.get('/create', (req, res)=> {
    res.send(`<h1>Post page</h1><form method="post" action="http://localhost:3000/post/">\
    Enter text:<br><input type="text" name="text">\
    <br><br><input type="submit" value="Submit"></form>'`)
})

module.exports = router;