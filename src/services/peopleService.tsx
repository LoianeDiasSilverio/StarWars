import axios from "axios";
import {GET_PEOPLE} from './endpoints'

export default class PeopleService {
    async getPeopleRequest(id){
        return new Promise(async (resolve, reject) => {
            const url = GET_PEOPLE(id);
            try{
                const response = await axios.get(url);
                resolve(response.data);
            } catch(error){
                reject(new Error('Ocorreu um erro ao recuperar lista de personagens'))
            }
        })
    }
}