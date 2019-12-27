import { HttpService } from './HttpService'


class ManagersService extends HttpService{
    
    getAll(){
        return this.axios.get('/managers');
    }
    getId(id){
        return this.axios.get(`/managers/${id}`);
    }
}

export const managersService = new ManagersService()