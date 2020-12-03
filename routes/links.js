const express = require('express')
const router = express.Router();
const pool = require('../services/database')

router.get('/add',(req,res)=>{
    res.render('add')
})
router.post('/add', async(req,res)=>{
    const {title,url,description} = req.body
    const newLink = { 
        title,
        url,
        description
    
    }
   await pool.query('INSERT INTO links SET ?',[newLink])
    res.redirect('/links')
    
})

router.get('/',async(req,res)=>{
   const links =  await pool.query('SELECT * FROM links')
   console.log(links)
   res.render('list',{links})
})

router.get('/delete/:id',async(req,res)=>{
   const {id} = req.params
 await  pool.query('DELETE FROM links WHERE id = ?',[id])
 res.redirect('/links')
})

router.get('/edit/:id',async(req,res)=>{
    const {id} = req.params
  const [links] = await pool.query('SELECT * FROM links WHERE ID = ?',[id])
    res.render('edit',{links})
    
})

router.post('/edit/:id',async(req,res)=>{
    const {id} = req.params
    const {title,url,description} = req.body
    const newLink = { 
        title,
        url,
        description
    }
   await  pool.query('UPDATE links SET ? WHERE ID = ?',[newLink,id])

   console.log(newLink)
   res.redirect('/links')
})
module.exports = router