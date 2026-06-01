import {Body, Controller, Delete, Get, Post, UseGuards, Request} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import {CreateUserDto} from "./dto/create-user.dto";
import {CreateGeneralKnowledgeDto} from "../general-knwoledge/dto/create-general-knowledge.dto";
import {CreateResponseDto} from "./dto/create-response.dto";

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/all')
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('admin/id')
  async deleteUserById(@Body() id: number) {
    return await this.userService.deleteUserById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('admin')
  async changeAdminStatusUserById(@Body() id: { id: number }) {
    return await this.userService.updateAdmiRightByUserId(id.id);
  }

  @Post('addResponse')
  async addResponse(
      @Body() userResponse: CreateResponseDto,
  ) {
    console.log(userResponse)
    return await this.userService.addResponse(userResponse);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getUser(@Request() req){
    const token = req.headers.authorization;
    return await this.userService.getUserResponseList(token)
  }

  @Post()
  async createUSer(
      @Body() user: CreateUserDto,
  ) {
    return await this.userService.createUser(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  async deleteUser(@Request() req) {
    const token = req.headers.authorization;
    return await this.userService.deleteUser(token);
  }
}
