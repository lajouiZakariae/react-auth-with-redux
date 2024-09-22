import { ProductDto } from '../dto/product-dto'
import { apiClient } from '@/api-client' // Adjust the import path as necessary

export class ProductService {
    static async getAllProducts(): Promise<ProductDto[]> {
        const response = await apiClient.get('/products')
        return ProductDto.fromArray(response.data)
    }

    static async getProductById(id: number): Promise<ProductDto> {
        const response = await apiClient.get(`/products/${id}`)
        return ProductDto.fromObject(response.data)
    }

    static async createProduct(product: ProductDto): Promise<ProductDto> {
        const response = await apiClient.post('/products', product)
        return ProductDto.fromObject(response.data)
    }

    static async updateProduct(
        id: number,
        product: ProductDto
    ): Promise<ProductDto> {
        const response = await apiClient.put(`/products/${id}`, product)
        return ProductDto.fromObject(response.data)
    }

    static async deleteProduct(id: number): Promise<void> {
        await apiClient.delete(`/products/${id}`)
    }
}
