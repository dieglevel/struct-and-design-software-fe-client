import { IChat } from "@/models/response/chat"
import { EntityRepository } from "./EntityRepository.service"
import api from "@/libs/axios/axios.config"
import { ChatRequestDTO } from "@/models/request/chat.request.dto"

const CHAT_END_POINT = `${process.env.NEXT_PUBLIC_CHAT_SERVICE}/chat`

class ChatService extends EntityRepository<IChat> {
    async chat(chatRequestDTO: ChatRequestDTO) {
        return await api.post(CHAT_END_POINT, chatRequestDTO)
    }
}

const chatService = new ChatService(CHAT_END_POINT)

export default chatService
