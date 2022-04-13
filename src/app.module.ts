import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { FoodModule } from './food/FoodModule'
import { FoodModel } from './food/src/model/FoodModel'

@Module({
    imports: [AppModule, FoodModule, TypeOrmModule.forRootAsync({
        useFactory: () => ({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'nerit',
            password: null,
            database: 'food',
            entities: [FoodModel],
            synchronize: true,
            autoLoadEntities: true
        })
    })],
    controllers: [AppController],
    providers: [],
})
export class AppModule { }
