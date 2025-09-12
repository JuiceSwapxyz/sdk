import { Pool as V4Pool } from '@juiceswap/v4-sdk'
import { Pair } from '@juiceswap/v2-sdk'
import { Pool as V3Pool } from '@juiceswap/v3-sdk'

export type TPool = Pair | V3Pool | V4Pool
