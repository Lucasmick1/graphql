const UsersAPI = require('../querys/user/datasource/user')
const RolesAPI = require('../querys/role/datasource/role')

const dataSources = () => {
    return {
        usersAPI: new UsersAPI(),
        rolesAPI: new RolesAPI()
    }
}



module.exports = dataSources