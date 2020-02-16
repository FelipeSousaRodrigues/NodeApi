const users = [
  {
    id: 1,
    name: 'Felipe',
    email: 'contato@captalento.com'
  },

  {
    id: 2,
    name: 'Isaias',
    email: 'contato@captalento.com'
  },
];

() => {

}

class UserController {
  list (req, res){
    return res.json(users);
  }

  findOne (req, res)  {
    const {id} = req.params;
    
    const user = users.find(item =>  item.id == id);
 

    // const user = users.find((item) => {
    //  if(item.id == id) {
    //    return item
    //  }
    // });

    return res.json(user);
  }

  create (req, res) {
    const {name, email} = req.body;

    console.log(name, email)
    const user = {
      id: users.length + 1,
      name,
      email
    }

    users.push(user);

    return res.json(user);
  }
  
  update (req, res) {
    const {id} = req.params;
    const {name, email} = req.body;

    const i = users.findIndex(i => i.id == id);

    users[i] = {
      id: users[i].id,
      name, 
      email
    }

    return res.json(users[i]);
  }

  delete (req, res) {

    const {id} = req.params;
    
    const i = users.findIndex(i => i.id == id);
    
     users.splice(i, 1);

    return res.json ('User deleted');

  }

};

export default new UserController();