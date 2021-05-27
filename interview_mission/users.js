const express  = require('express');

const router = express.Router();

const users = [
    {
      id: 1,
      name: "Yosi",
    },
  
    {
      id: 2,
      name: "Bob",
    },
  
    {
      id: 3,
      name: "Shlomi",
    },
  
    {
      id: 4,
      name: "Julia",
    }
  ];

  // print all users localhost:3000/users
  router.get('/',(req,res) =>{
    console.log(users);
    res.send(users);
  })

  // find user by its id localhost:3000/users/id
  router.get('/:id',(req,res) =>{
   const {id} = req.params;
   const find_user_by_id = users.find((user) => user.id == id);
   console.log(find_user_by_id);
   res.send(find_user_by_id);
  });

  module.exports = router;