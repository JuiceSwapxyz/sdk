import { ChainId, Percent, V2_FACTORY_ADDRESSES } from '@juiceswapxyz/sdk-core'
import JSBI from 'jsbi'

/**
 * @deprecated use FACTORY_ADDRESS_MAP instead
 */
export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = V2_FACTORY_ADDRESSES

export const INIT_CODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'

// Per-chain init code hashes for custom V2 deployments
export const INIT_CODE_HASH_MAP: { [chainId: number]: string } = {
  [ChainId.CITREA_TESTNET]: '0xdc3b9f52403077ec7261ad325e15f34e395cf7e2a5c3782098edb10a7599cc3e',
}

// Per-chain LP token branding for custom V2 deployments
export const LP_TOKEN_SYMBOL_MAP: { [chainId: number]: string } = {
  [ChainId.CITREA_TESTNET]: 'JUICE-V2',
}

export const LP_TOKEN_NAME_MAP: { [chainId: number]: string } = {
  [ChainId.CITREA_TESTNET]: 'JuiceSwap V2',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)
