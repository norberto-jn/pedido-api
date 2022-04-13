import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { FoodModule } from './food/FoodModule'
import { FoodModel } from './food/src/model/FoodModel'

require('dotenv').config('../.env')

@Module({
    imports: [AppModule, FoodModule, TypeOrmModule.forRootAsync({
        useFactory: () => ({
            type: process.env.DB_CONNECTION,
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD == 'NULL' ? null : process.env.DB_PASSWORD,
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
