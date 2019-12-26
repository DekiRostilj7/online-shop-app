import { HttpService } from './HttpService'


class ShopsService extends HttpService{
    
    getAll(){
        return this.axios.get('/shops');
    }
}

export const shopsService = new ShopsService()