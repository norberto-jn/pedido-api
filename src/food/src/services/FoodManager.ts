import { BadRequestException, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { FoodSaveRequestDTO } from "../dto/request/FoodSaveRequestDTO"
import { FoodModel } from "../model/FoodModel"
import { FoodDAO } from "./FoodDAO"

@Injectable()
export class FoodManager {

    constructor(
        @InjectRepository(FoodDAO) private readonly _foodDAO: FoodDAO
    ) { }

    async findAll(date: Date) {
        return this._foodDAO.findAll(date)
    }

    async findOne(code: number): Promise<FoodModel> {
        return await this._foodDAO.findOne(code)
    }

    async save(dto: FoodSaveRequestDTO): Promise<FoodModel> {

        const foodModel: FoodModel = {
            name: dto.name,
            phone: dto.phone,
            food: dto.food,
            date: new Date()
        }

        return this._foodDAO.save(foodModel)
    }

    async delete(code: number): Promise<void> {
        const foodModel: FoodModel = await this._foodDAO.findOne(code)
        if (!foodModel) {
            throw new BadRequestException('codigo nao')
        }
        this._foodDAO.delete(foodModel)
    }
}