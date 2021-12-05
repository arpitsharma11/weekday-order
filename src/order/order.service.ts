import { Injectable } from '@nestjs/common';
import { MinHeap } from 'src/utils/min-heap';
import { orderDetailsCalculator } from '../utils/order-utils';
import { ORDER_MSG_ACCEPT, ORDER_MSG_REJECT } from './order.constant';

@Injectable()
export class OrderService {
  checkOrder(createOrderArray): string[] {
    const MAX_SLOTS = 7;
    let noSlotsUsed = 0;

    const orderStatusArray = [];

    let timeGone = 0;

    const heap = new MinHeap();

    createOrderArray.forEach((order) => {
      const orderDetails = orderDetailsCalculator(order.meals);
      if (MAX_SLOTS > orderDetails.noOfSlots) {
        if (noSlotsUsed + orderDetails.noOfSlots <= MAX_SLOTS) {
          const time = orderDetails.totalTime + order.distance * 8;
          heap.insert({
            orderId: order.orderId,
            time: time,
            slots: orderDetails.noOfSlots,
          });
          noSlotsUsed += orderDetails.noOfSlots;
          orderStatusArray.push(
            ORDER_MSG_ACCEPT(order.orderId, time + timeGone),
          );
        } else {
          const time = orderDetails.totalTime + order.distance * 8;
          while (true) {
            const popedOrder = heap.extractMin();
            timeGone += popedOrder.time;
            noSlotsUsed -= popedOrder.slots;
            if (noSlotsUsed + orderDetails.noOfSlots <= MAX_SLOTS) {
              heap.insert({
                orderId: order.orderId,
                time: time,
                slots: orderDetails.noOfSlots,
              });
              noSlotsUsed += orderDetails.noOfSlots;
              break;
            }
          }
          orderStatusArray.push(
            ORDER_MSG_ACCEPT(order.orderId, time + timeGone),
          );
        }
      } else {
        orderStatusArray.push(ORDER_MSG_REJECT(order.orderId));
      }
    });

    return orderStatusArray;
  }
}
