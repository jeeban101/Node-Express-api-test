const {v4: uuidv4} = require('uuid');


let users = [];

const getUsers = (req,res) => {
     // if users doesn't exist, return error
     if(users.length === 0) {
        res.status(404).send("Users not found")
        return;
    }
    console.log(users);
    
    res.send(users);
    //res.send('Hello 1st from users');
}
const createUser = (req,res) =>{
    console.log(`POST ROUTE REACHED`);
    const user = req.body;
    const userID = uuidv4(); // => 'long-zervish string with date-crptography-other'
    const userWithId = {...user, id:userID}; // learn spread operator added new value in the users along with firstname,lastname and age //id new added here
    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to database `);
}
const findUser =(req,res) =>{
    const { id } = req.params;

    //find the user in the daatabse having same id
    const foundUser = users.find((user) => user.id === id);
  
    res.send(foundUser);
}
const deleteUser  = (req,res) => {
    const { id } = req.params;

    users=users.filter((user) => user.id !== id); //  remove the object with the false conditon
    res.send(`user with th eid ${id} deleted from the databse.`)
}
const updateUser =(req,res) =>{
    const { id } = req.params;

    const {firstName,lastName,age} = req.body;
  
    userToupdate = users.find((user) =>user.id === id);
    if(firstName) userToupdate.firstName=firstName;
    if(lastName) userToupdate.lastName=lastName;
    if(age) userToupdate.age=age;
  
    res.send(`user with id: ${id} is updated`)
  
}

module.exports = {getUsers,createUser,findUser,deleteUser,updateUser};
