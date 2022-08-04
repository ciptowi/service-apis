import { Request, Response } from "express";
// import UserModel from '../models/user';

class UserController {
  // user = new UserModel();  // Object of User model
  private posts = [
    {
      name: "Marcin",
      content: "Dolor sit amet",
      title: "Lorem Ipsum",
    },
  ];
  // Business Logic for GET API
  getAllPosts = (req: Request, res: Response) => {
    res.status(200).json(this.posts);
  };

  // Business Logic for POST API
  // createAPost = (request, response) => {
  //        // Moongo DB Insert Operation
  // 	this.user.saveUser(this.posts, (err, user) => {
  // 		if (err) {
  // 			response.send(err)
  // 		} else {
  // 			response.send(user);
  // 		}
  // 	})
  // }
}

export default UserController;
