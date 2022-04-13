import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'food' })
export class FoodModel {

    @PrimaryGeneratedColumn()
    code?: number

    @Column({ name: 'name', type: 'text' })
    name: string

    @Column({ name: 'phone', type: 'text' })
    phone: string

    @Column({ name: 'food', type: 'text' })
    food: string

    @Column({ name: 'creationDate', type: 'timestamp' })
    date: Date
}
