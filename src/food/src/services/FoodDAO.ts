import { EntityRepository, Repository, SelectQueryBuilder } from "typeorm"
import { FoodModel } from "../model/FoodModel"

@EntityRepository(FoodModel)
export class FoodDAO extends Repository<FoodModel>{

    async findAll(date: Date): Promise<FoodModel[]> {
        const query = this.createQueryBuilder()
        query.where('date(creationDate)=:date', { date: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}` })
        return query.getMany()
    }

    async createQueryBuilders(): Promise<SelectQueryBuilder<FoodModel>> {
        return this.createQueryBuilder().select('food').from(FoodModel, 'food')
    }
}