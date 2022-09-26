import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, Product } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class ProductsService {
  public getProducts(): Promise<Product[]> {
    return prisma.product.findMany();
  }



  public createProduct(data: Prisma.ProductCreateInput | any): Promise<Product> {
    data.price = +data.price
    return prisma.product.create({ data: data })
  }

  public getProduct(id:string): Promise<Product> {
    return prisma.product.findUnique({ where: { id } });
  }

  public updateProduct(id: string, data: Prisma.ProductCreateInput | any): Promise<Product> {
    data.price = +data.price
    return prisma.product.update({
        where: {
          id: id,
        },
        data: data,
      })
  }
}
