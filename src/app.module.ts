import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

@Module({

  imports: [

    TypeOrmModule.forRoot({

      type: 'postgres',
      port: 5432, 
      host: 'localhost',
      username: 'postgres',
      password: 'pass',
      database: 'nestjs-oauth2',
      entities: [User],
      synchronize: true

    }),

    AuthModule,

    UserModule

  ],

})
export class AppModule { }
