import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getStatus(): {status: string} {
    return {status : 'Server is Running...'}
  }
}
