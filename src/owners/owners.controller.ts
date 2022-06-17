import {Controller, Get, Param} from '@nestjs/common'
import { OwnersService } from './owners.service'

@Controller('owners')
export class OwnersController {
    constructor(private readonly ownersService: OwnersService) {}

    @Get('/:contractAddress/:tokenId')
    getOwners(@Param('contractAddress') contractAddress: string, @Param('tokenId') tokenId: string) {
        return this.ownersService.getOwners(contractAddress, tokenId)
    }

    @Get('/mintOwner/:contractAddress/:tokenId')
    getMintOwner(@Param('contractAddress') contractAddress: string, @Param('tokenId') tokenId: string) {
        return this.ownersService.getMintOwner(contractAddress, tokenId)
    }
}