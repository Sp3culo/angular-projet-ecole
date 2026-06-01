import { forwardRef, Inject, Injectable} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import {IUserLogin} from "@interface";
import {LoginResponseDto} from "./dto/login-response.dto";

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string) {
    const user: User = await this.userService.getUser(login, password);
    const validPassword: boolean = await this.userService.comparePassword(password, user.password);

    return user && validPassword ? user : null;
  }

  async login(user: IUserLogin): Promise<LoginResponseDto> {
    try {
      const userInfo: User = await this.userService.getUser(user.username, user.password);
      const payload = {
        username: user.username,
        id: userInfo.id,
        admin: userInfo.admin
      };

      return {
        message: "Utilisateur connecté",
        code: 200,
        user : {
          access_token: this.jwtService.sign(payload),
          id: userInfo.id,
          username: user.username,
          admin: userInfo.admin,
          score: userInfo.score,
        }
      };
    } catch (e) {
      return {
        message: "L'utilisateur introuvable, vérifier le login et le mot de passe",
        code: 400,
      };
    }
  }

  async getTokenInformation(bearerToken : string) {
    const token = this.extractTokenFromHeader(bearerToken);

    const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: "MaSuperClefSecrete"
        }
    );
    return payload.id
  }

  private extractTokenFromHeader(bearerToken: string): string | undefined {
    const [type, token] = bearerToken?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
