import { IUser } from "@/types/entities/User";
import { EntityRepository } from "./EntityRepository.service";
import api from '@/libs/axios/axios.config'

const END_POINT = `${process.env.NEXT_PUBLIC_USER_SERVICE}/users`

class UserService extends EntityRepository<IUser> {
    async getMe() {
        return await api.get(`${this.END_POINT}/my-info`)
    }
}

const userService = new UserService(END_POINT);

export default userService;