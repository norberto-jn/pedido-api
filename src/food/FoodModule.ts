import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FoodController } from './src/FoodController'
import { FoodDAO } from './src/services/FoodDAO'
import { FoodManager } from './src/services/FoodManager'

@Module({
    imports: [TypeOrmModule.forFeature([FoodDAO])],
    controllers: [FoodController],
    providers: [FoodManager],
})
export class FoodModule { }
