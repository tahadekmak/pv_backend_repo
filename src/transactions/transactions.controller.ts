import {Controller, Get, Param} from '@nestjs/common'
import { TransactionsService } from './transactions.service'

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Get('/:contractAddress/:tokenId')
    getTransactions(@Param('contractAddress') contractAddress: string, @Param('tokenId') tokenId: string) {
        return this.transactionsService.getTransactions(contractAddress, tokenId)
    }
}