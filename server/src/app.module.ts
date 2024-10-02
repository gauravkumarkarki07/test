import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { DatabaseModule } from './Database/database.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
