import {HttpException, HttpService, Injectable, NotFoundException } from '@nestjs/common'
const myKey = 'key'

@Injectable()
export class OwnersService {

    constructor(private httpService: HttpService) {}

    async getOwners(contractAddress, tokenId) {
        let owners = []

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
            });

        const result = response.data.result
        for (let r of result) {
            const owner = r['to']
            owners.push({'ownerAddress': owner})
        }

        return owners;
    }

    async getMintOwner(contractAddress, tokenId) {
        let owner

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
            });

        const result = response.data.result
        const ownerDetials = result.at(-1)
        owner = {ownerAddress: ownerDetials['to']}

        return owner
    }
}