import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Database/database.service';
import { hashSync, compareSync } from 'bcryptjs';

export interface RegisterData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  usernameOrEmail: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}

  async registerUser(registerData: RegisterData) {
    const { firstName, lastName, username, email, password } = registerData;
    try {
      const existingUser = await this.databaseService.user.findFirst({
        where: {
          OR: [{ email }, { password }],
        },
      });

      if (existingUser) {
        throw new Error('User already exists');
      }

      const hashedPassword = hashSync(password, 10);

      const newuser = await this.databaseService.user.create({
        data: {
          firstName,
          lastName,
          username,
          email,
          password: hashedPassword,
        },
      });

      if (!newuser) {
        throw new Error('User could not be registered');
      }

      return newuser;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(loginData: LoginData) {
    const { password, usernameOrEmail } = loginData;
    try {
      const user = await this.databaseService.user.findFirst({
        where: {
          OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
        },
      });

      if (!user) {
        throw new Error('User doenst exists');
      }

      const isPasswordCorrect = compareSync(password, user.password);

      if (!isPasswordCorrect) {
        throw new Error('Invalid credentials');
      }

      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      throw error;
    }
  }
}
