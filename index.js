import 'dotenv/config'

import { mongo } from './services/mongo.service.js'
import { api } from './services/api.service.js'

// API Server
api()

// MongoDB Connection
mongo()
