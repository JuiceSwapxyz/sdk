import { Token } from './token'

/**
 * Bridged USDC.e on Citrea Mainnet (via LayerZero)
 */
export const USDC_E: { [chainId: number]: Token } = {
  4114: new Token(4114, '0xE045e6c36cF77FAA2CfB54466D71A3aEF7bbE839', 6, 'USDC.e', 'Bridged USD Coin'),
}

/**
 * Bridged USDT.e on Citrea Mainnet (via LayerZero)
 */
export const USDT_E: { [chainId: number]: Token } = {
  4114: new Token(4114, '0x9f3096Bac87e7F03DC09b0B416eB0DF837304dc4', 6, 'USDT.e', 'Bridged Tether USD'),
}

/**
 * Bridged WBTC.e on Citrea Mainnet (via LayerZero OFT)
 */
export const WBTC_E: { [chainId: number]: Token } = {
  4114: new Token(4114, '0xDF240DC08B0FdaD1d93b74d5048871232f6BEA3d', 8, 'WBTC.e', 'Bridged Wrapped BTC'),
}
