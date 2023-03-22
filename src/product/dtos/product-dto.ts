import { IsDecimal, IsMongoId, IsNotEmpty } from "class-validator";

export class ProductDto {

    @IsNotEmpty()
    name: string;

    slug: string;

    description: string;

    @IsNotEmpty()
    @IsDecimal()
    price: number;

    quantity: number;

    @IsNotEmpty()
    @IsMongoId()
    category: any;

}