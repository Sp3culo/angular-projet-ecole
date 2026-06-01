export class LoginResponseDto {
   message: string;
   code: number;
   user?: {
       id: number;
       access_token: string;
       username: string;
       admin: boolean;
       score: number;
   }
}