import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'amauri@gmail.com',
    password: '12345',
    techs: ['Node.js', 'React', 'React Native', { title: 'Javascript', experience: 100 }]
  });
  return response.json({ message: "Hello World" });
}