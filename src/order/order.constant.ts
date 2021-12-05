export const ORDER_MSG_ACCEPT = (id, time): string =>
  `Order ${id} will get delivered in ${time} minutes.`;

export const ORDER_MSG_REJECT = (id): string =>
  `Order ${id} is denied because the restaurant cannot accommodate it.`;
