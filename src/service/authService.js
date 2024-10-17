import bcrypt from 'bcrypt';
import authRepository from '../repositories/authRepository.js';

async function signup(body) {
  const hasPassword = bcrypt.hashSync(body.password, 10);

  const userExists = await authRepository.findByEmail(body.email);
  if(userExists) throw new Error("User already exists!")


  return await authRepository.create({...body, password: hasPassword})

}

export default {
    signup
}