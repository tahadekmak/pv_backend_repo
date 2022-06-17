import {HttpModule, Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { OwnersModule } from './owners/owners.module'
import { TransactionsModule } from './transactions/transactions.module'

@Module({
  imports: [HttpModule, OwnersModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
