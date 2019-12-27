import { HttpService } from './HttpService'


class ShopsService extends HttpService{
    
    getAll(){
        return this.axios.get('/shops');
    }
    getId(id){
        return this.axios.get(`/shops/${id}`)
    }
    addShop(shop){
        return this.axios.post('shops', shop)
    }
}

export const shopsService = new ShopsService()