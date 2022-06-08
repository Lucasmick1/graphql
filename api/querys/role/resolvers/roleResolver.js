const roleResolver = {
    Query: {
        roles: (root, _, { dataSources }) => dataSources.rolesAPI.getRoles() ,
        role: (root, { id }, { dataSources }) => dataSources.rolesAPI.getRoleById(id)
    }
}

module.exports = roleResolver