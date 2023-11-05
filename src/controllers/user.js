import axios from "axios";

export const getUser = async () => {
  const response  = await axios.get('https://ai-bert-backend-qrwoug6p3q-lz.a.run.app/api/objects/user/1')
  console.log(response.data)
  return response.data
}