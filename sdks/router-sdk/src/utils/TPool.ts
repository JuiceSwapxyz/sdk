import { Pool as V4Pool } from '@juiceswapxyz/v4-sdk'
import { Pair } from '@juiceswapxyz/v2-sdk'
import { Pool as V3Pool } from '@juiceswapxyz/v3-sdk'

export type TPool = Pair | V3Pool | V4Pool
