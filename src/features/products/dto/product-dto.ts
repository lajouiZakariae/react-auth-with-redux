export class ProductDto {
    constructor(public id: number, public name: string, public price: number) {}

    static fromObject(obj: ProductObjectType): ProductDto {
        return new ProductDto(obj.id, obj.name, obj.price)
    }

    static fromArray(arr: ProductObjectType[]): ProductDto[] {
        return arr.map(item => ProductDto.fromObject(item))
    }
}

export type ProductObjectType = {
    [K in keyof ProductDto]: ProductDto[K]
}
