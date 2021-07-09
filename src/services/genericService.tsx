import axios from "axios";

export default class PeopleService {
    async getGenericRequest(url){
        return new Promise(async (resolve, reject) => {
            try{
                const response = await axios.get(url);
                resolve(response.data);
            } catch(error){
                reject(new Error('Ocorreu um erro ao recuperar lista de personagens'))
            }
        })
    }
}