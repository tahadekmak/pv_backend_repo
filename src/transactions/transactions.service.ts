import {HttpException, HttpService, Injectable, NotFoundException } from '@nestjs/common'
const myKey = '98H4V8ZIQJGTPVTFGWH7MIHWJRF1YEFYJZ'

@Injectable()
export class TransactionsService {

    constructor(private httpService: HttpService) {}

    async getTransactions(contractAddress, tokenId) {
        let transactions = []

        const url = 'https://api.etherscan.io/api' +
            '?module=account' +
            '&action=txlist' +
            '&address=' + contractAddress +
            '&startblock=0' +
            '&endblock=99999999' +
            '&page=1' +
            '&offset=10' +
            '&sort=asc' +
            '&apikey=' + myKey

        const response = await this.httpService
            .get(url)
            .toPromise()
            .catch((err) => {
                throw new HttpException(err.response.data, err.response.status)
            })

        const result = response.data.result
        transactions = result

        return transactions
    }
}
