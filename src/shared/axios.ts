import axios from 'axios'

import { SERVER_URL } from '@shared/constants'

const instance = axios.create({ baseURL: SERVER_URL })

export default instance
