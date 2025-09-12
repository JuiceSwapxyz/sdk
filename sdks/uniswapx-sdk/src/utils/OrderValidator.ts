import {
  OrderValidation,
  RelayOrderQuoter,
  SignedRelayOrder,
  SignedJuiceSwapXOrder,
  JuiceSwapXOrderQuoter,
} from "./OrderQuoter";

/**
 * UniswapX order validator
 */
export class OrderValidator extends JuiceSwapXOrderQuoter {
  async validate(order: SignedJuiceSwapXOrder): Promise<OrderValidation> {
    return (await super.quote(order)).validation;
  }

  async validateBatch(
    orders: SignedJuiceSwapXOrder[]
  ): Promise<OrderValidation[]> {
    return (await super.quoteBatch(orders)).map((order) => order.validation);
  }
}

export class RelayOrderValidator extends RelayOrderQuoter {
  async validate(order: SignedRelayOrder): Promise<OrderValidation> {
    return (await super.quote(order)).validation;
  }

  async validateBatch(orders: SignedRelayOrder[]): Promise<OrderValidation[]> {
    return (await super.quoteBatch(orders)).map((order) => order.validation);
  }
}
