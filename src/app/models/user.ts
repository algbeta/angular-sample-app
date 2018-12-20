import IUser from './user.interface';

class User implements IUser {
  id: string;
  firstName: string;
  lastName: string;
}

export default User;
