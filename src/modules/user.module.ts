import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Users from 'src/entities/users.entity';
import { UserController } from '../controllers/users.controller';
import { UserService } from '../services/users.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn:'1d' }
    })
  ],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule {}