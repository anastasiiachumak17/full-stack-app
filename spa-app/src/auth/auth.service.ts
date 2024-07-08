
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async generateJwtToken(user: User): Promise<string> {
        const payload = { sub: user.id };
        return this.jwtService.sign(payload, { expiresIn: '1d' });
    }
}
