import { HttpService } from './HttpService'


class ManagersService extends HttpService{
    
    getAll(){
        return this.axios.get('/managers');
    }
}

export const managersService = new ManagersService()