 const express = require('express');
 const path = require("node:path");
 const blogs = require("../data/blogs");
const router = express.Router();

const BlogRedirectionArray = {
    "mongodb-learn" : "mongodb" , "express-learn" : "express",
    "react-learn" : "react" , "node-learn" : "node"
};

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../views/home.html'));
    res.render('home' , { blogs : blogs });
})

 router.get('/contact', (req, res) => {
     // res.sendFile(path.join(__dirname, '../views/contact.html'));
     res.render('contact');
 })

 router.get('/about', (req, res) => {
     // res.sendFile(path.join(__dirname, '../views/contact.html'));
     res.render('about');
 })

 router.get('/service', (req, res) => {
     // res.sendFile(path.join(__dirname, '../views/contact.html'));
     res.render('service');
 })

 router.get('/blogpage', (req, res) => {
     res.sendFile(path.join(__dirname, '../views/blogpage.html'));
 })

 router.get('/blogpost/:slug', (req, res) => {
     const myBlog = blogs.find((blog) => blog.slug === req.params.slug);
     if (myBlog) {
         // res.sendFile(path.join(__dirname, '../views/blogpage.html'));
         res.render(BlogRedirectionArray[req.params.slug])
     } else {
         res.status(404).send('Blog post not found');
     }
 })

 module.exports = router;