const bodyParser = require('body-parser');
const express=require('express');
var mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/myapp")
const cors=require('cors');
const port=3000;
const app=express()
app.use(bodyParser.json())
app.use(cors())

const userSchema = mongoose.Schema({
    userName: String,
    email:String,
    password: String,
    confirmPassword:String,
    address:{
        city:String,
        state:String,
        postalCode:String
    },
    visitType:String,
    date:Date,
    time:String,
    Email:String
})
const User = mongoose.model('User', userSchema)
const commentSchema=mongoose.Schema({
    comment:String,
    userid:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
},{timestamps:true,_id:false})

const postSchema=mongoose.Schema({
    userid:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title:String,
    desc:String,
    comments: [commentSchema]
}, { timestamps: true})

const Post = mongoose.model('Post',postSchema)

app.post('/enroll',async (req,res)=>{
    try {
        await User.create(req.body)
    } catch (error) {
        throw new Error (error)
    }
})
app.get('/posts',async(req,res)=>{
    const posts = await Post.find().populate("comments.userid").populate("userid")
    res.json(posts);
})
app.post('/posted',async(req,res)=>{
    await Post.create(req.body)
})
app.post('/check',async (req,res)=>{
    const username = req.body.userName;
    const useridin= req.body.useridIn
    const user =  await User.findOne({ userName: username })
    if(useridin){
        if(!user){
            res.json({ exists: false });
        }
        else{
                if(username==useridin.userName){
                    res.json({exists:true})
                }
                else{
                    res.json({exists:false})
                }
            }
        }
    else{
        if (user) {
            res.json({ exists: true, userid: user._id });
          } else {
            res.json({ exists: false });
        }
    }
})
app.post('/comment',async(req,res)=>{
    const comment=req.body.comment;
    const userid=req.body.userid;
    const postId=req.body.postid;
    try {
        await Post.updateOne({_id:postId},{$push:{comments:{comment:comment,userid:userid}}});
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
})
app.post('/del',async(req,res)=>{
    const useridin=req.body.useridIn;
    const c=req.body.c;
    const postid=req.body.postid
    if(c){
        await Post.updateOne({_id:postid},{$pull:{comments:{userid:useridin}} } )
         
    }
    else{
        
         await Post.deleteOne({_id:postid})
        }
})
app.listen(port,function(){
    console.log("server running")
})