const { RESTDataSource } = require('apollo-datasource-rest')
const RolesAPI = require('../../role/datasource/role')


class UsersAPI extends RESTDataSource {

    constructor() {
        super()
        this.baseURL = 'http://localhost:3000'
        this.rolesApi = new RolesAPI()
    }

    async getUsers() {
        const users = await this.get('/users')
        return users.map(async user => ({
            ...user,
            role: await this.get(`/roles/${user.role}`)
        }))
    }

    async getUser(_id) {
        const user = await this.get(`/users/${_id}`)
        return {
            ...user,
            role: await this.get(`/roles/${user.role}`)
        }
    }

    async includeUser(user) {
        const [role] = await this.get(`/roles?type=${user.role}`)
        if (!role) {
            return null
        }
        const { id: lastId } = await this.get('/lastUserId')
        const id = lastId + 1

        const userCreated = await this.post('/users', { ...user, id, role: role.id })
        await this.put('/lastUserId', { id })

        return { ...userCreated, role }
    }

    async updateUser({ id: userId, ...update }) {
        const user = await this.get(`/users/${userId}`)
        if (!user) {
            return {}
        }

        const updateUser = {
            ...user,
            ...update.user,
        }

        await this.put(`/users/${user.id}`, updateUser)

        const [role] = await this.get(`/roles?type=${updateUser.role}`)
        return { ...updateUser, role }

    }

    async deleteUserById(id) {
        await this.delete(`/users/${id}`)
        return id
    }
}

module.exports = UsersAPI