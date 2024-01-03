import { AxiosInstance } from 'axios'
import { GetAllResponse, GetOneResponse } from './types'
import parsing from './parsing'

const resource = '/pokemon'

export default (client: AxiosInstance) => ({
  getAll: ({
    limit = 20,
    offset = 0
  } = {
      limit: 20,
      offset: 0
    }) => {
    return client
      .get<GetAllResponse>(resource, {
        params: {
          limit,
          offset
        }
      })
      .then((response) => {
        return response.data
      })
  },
  getOne: (id: string) => {
    return client.get<GetOneResponse>(`${resource}/${id}`).then((response) => {
      return parsing.getOne(response.data)
    })
  }
})
