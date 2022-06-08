const { RESTDataSource } = require('apollo-datasource-rest')

class RolesAPI extends RESTDataSource {

    constructor(){
        super()
        this.baseURL = 'http://localhost:3000'
    }

    async getRoles(){
        return this.get('/roles')
    }

    async getRoleById(id){
        return this.get(`/roles/${id}`)
    }
    
}


module.exports = RolesAPI