import { string } from "@hapi/joi";
import { Post,Controller, Body, Get, Param, Delete, Put, Res, Req  } from "@nestjs/common";
import { Response } from "express";
import { CreateUserDto } from "src/dto/createUser.dto";
import { UpdateUserDto } from "src/dto/updateUser.dto";
import { UserService } from "src/services/users.service";



@Controller('users')
export class UserController{
    constructor(private userService: UserService){}


    // registration
    @Post()
    async create(@Body() user: CreateUserDto){
        console.log(user);
        return this.userService.create(user)
    }

    // login
    @Post('login')
    async login(@Body() user: CreateUserDto ){
        console.log(user)
        return this.userService.getByEmail(user.email, user.password)
    }
    

    @Get()
    async getAll(){
        return this.userService.getAll()
    }




    
}