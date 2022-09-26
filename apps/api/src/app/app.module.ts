import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController, ProductsService} from '@store/products';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
