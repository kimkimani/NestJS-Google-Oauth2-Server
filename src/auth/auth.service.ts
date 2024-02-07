import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async validateUser(email: string, displayName: string) {
    const user = await this.userRepo.findOne({ where: { email: email } });

    if (user) {
      return user;
    }

    const newUser = this.userRepo.create({ email, displayName });
    await this.userRepo.save(newUser);
    return newUser;
  }

  async findUser(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    return id;
  }

  handlerLogin() {
    return 'handlerLogin';
  }

  handlerRedirect() {
    return 'handlerRedirect';
  }
}
