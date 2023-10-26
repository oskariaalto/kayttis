import axios from "axios"

const baseUrl = 'https://ai-bert-backend-qrwoug6p3q-lz.a.run.app'

export const sendChat = async (content, chatId, assignmentId) => {
  if(assignmentId){
    const body = {
      content: content,
      userId: 1,
      assignmentId: assignmentId
    }
    console.log(chatId)
    const url = chatId=== 0 ? `${baseUrl}/api/chat/assignment` : `${baseUrl}/api/chat/assignment/${chatId}`
    console.log(url)
    const res = await axios.post(url, body)
    return res.data
  } else {
    const body = {
      content: content,
      userId: 1
    }
    console.log(chatId)
    const url = chatId=== 0 ? `${baseUrl}/api/chat/normal` : `${baseUrl}/api/chat/normal/${chatId}`
    console.log(url)
    const res = await axios.post(url, body)
    return res.data
  }
}

export const getHints = async (assignmentId) => {
  const body = {
    userId: 1,
    assignmentId: assignmentId
  }
  const res = await axios.post('http://localhost:3000/api/chat/hints', body)
  return res.data
}