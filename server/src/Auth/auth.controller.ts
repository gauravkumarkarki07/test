import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterData, LoginData } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async Register(@Body() registerData: RegisterData) {
    return await this.authService.registerUser(registerData);
  }

  @Post('login')
  async Login(@Body() loginData: LoginData) {
    return await this.authService.loginUser(loginData);
  }
}
