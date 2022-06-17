import {HttpModule, Module } from '@nestjs/common'
import { OwnersController } from './owners.controller'
import {OwnersService} from './owners.service'

@Module({
    imports : [HttpModule],
    controllers: [OwnersController],
    providers: [OwnersService],
})
export class OwnersModule {}