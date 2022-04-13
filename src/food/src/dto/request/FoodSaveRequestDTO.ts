import { IsNotEmpty } from "class-validator"

export class FoodSaveRequestDTO {

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    phone: string

    @IsNotEmpty()
    food: string
}