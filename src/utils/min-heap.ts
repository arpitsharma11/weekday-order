export function MinHeap() {
  this.data = [];
}

MinHeap.prototype.insert = function (val) {
  this.data.push(val);
  this.bubbleUp(this.data.length - 1);
};

MinHeap.prototype.bubbleUp = function (index) {
  while (index > 0) {
    const parent = Math.floor((index + 1) / 2) - 1;
    if (this.data[parent].time > this.data[index].time) {
      const temp = this.data[parent];
      this.data[parent] = this.data[index];
      this.data[index] = temp;
    }
    index = parent;
  }
};

MinHeap.prototype.extractMin = function () {
  const min = this.data[0];
  this.data[0] = this.data.pop();
  this.bubbleDown(0);
  return min;
};

MinHeap.prototype.bubbleDown = function (index) {
  while (true) {
    const child = (index + 1) * 2;
    const sibling = child - 1;
    let toSwap = null;
    if (this.data[index] > this.data[child]) {
      toSwap = child;
    }

    if (
      this.data[index] > this.data[sibling] &&
      (this.data[child] == null ||
        (this.data[child] !== null && this.data[sibling] < this.data[child]))
    ) {
      toSwap = sibling;
    }

    if (toSwap == null) {
      break;
    }

    const temp = this.data[toSwap];
    this.data[toSwap] = this.data[index];
    this.data[index] = temp;

    index = toSwap;
  }
};
