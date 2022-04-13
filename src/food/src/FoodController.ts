import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { FoodSaveRequestDTO } from "./dto/request/FoodSaveRequestDTO"
import { FoodManager } from "./services/FoodManager"

@Controller('customer/food')
export class FoodController {
    constructor(
        private readonly _foodManager: FoodManager
    ) { }

    @Get()
    async findAll() {
        return this._foodManager.findAll(new Date())
    }

    @Get(':code')
    async findOne(@Param('code') code: number) {
        return this._foodManager.findOne(code)
    }

    @Post()
    async save(@Body() dto: FoodSaveRequestDTO) {
        return this._foodManager.save(dto)
    }

    @Delete(':code')
    async delete(@Param('code') code: number) {
        return this._foodManager.delete(code)
    }

}