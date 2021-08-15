import { AuthInterface } from '../interfaces/auth.interface';

export class AuthModel implements AuthInterface {
  cedula!: string;
  password!: string;
}
