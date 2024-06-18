let dataUsers = [
    {
      id: 1,
      first_name: "Doe",
      last_name: "John",
      email: "John@email.com",
      password:"123456789"
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Doe",
      email: "Doe@email.com",
      password:"123456789"
    },
    {
      id: 3,
      first_name: "Doe",
      last_name: "Doe",
      email: "JohnDoe@email.com",
      password:"123456789"
    },
  ];
  
  export const getDataUsers = (req, res) => {
    res.json(dataUsers);
  };
  
  export const getUsersId = (req, res) => {
    const id = parseInt(req.params.id);
    const userData = dataUsers.find((b) => b.id === id);
    if (!userData) {
      return res.status(404).json({ message: "user not found" });
    } else {
      return res.json(userData);
    }
  };
  
  export const registrationUser = (req, res) => {
    const userData = req.body;
    dataUsers.push(userData);
    res.json(userData);
  };
  
  export const updateDataUser = (req, res) => {
    const id = parseInt(req.params.id);
    const userData = dataUsers.find((b) => b.id === id);
    if (!userData) {
      return res.status(404).json({ message: "user not found" });
    } else {
        userData.name = req.body.name;
        userData.email = req.body.email;
      return res.json(userData);
    }
  };
  
  export const removeDataUser = (req, res) => {
    const id = parseInt(req.params.id);
    const userData = dataUsers.find((b) => b.id === id);
    if (!userData) {
      return res.status(404).json({ message: "user not found" });
    } else {
        userData = dataUsers.filter((b) => b.id !== id);
      return res.json(userData);
    }
  };