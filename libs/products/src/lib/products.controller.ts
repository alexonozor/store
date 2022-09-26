import { Controller, Get, Post, Put, Req, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
import { Response, Request } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  // constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.productsService.getProducts()
  }

  @Post()
  createProducts(@Req() req: Request, @Res() res: Response) {
    this.productsService.createProduct(req.body).then((data) => {
      res.json(data);
    });
  }

  @Get(':id')
  getProduct(@Req() req: Request, @Res() res: Response) {
    return this.productsService.getProduct(req.params.id).then((product: Product) => {
      res.json(product);
    });
  }

  @Put(':id')
  updateProducts(@Req() req: Request, @Res() res: Response) {
    this.productsService.updateProduct(req.params.id, req.body).then((product: Product) => {
      res.json(product);
    });
  }
}
