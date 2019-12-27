import { HttpService } from './HttpService'


class ShopsService extends HttpService{
    
    getAll(){
        return this.axios.get('/shops');
    }
    getId(id){
        return this.axios.get(`/shops/${id}`)
    }
}

export const shopsService = new ShopsService()