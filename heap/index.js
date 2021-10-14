// https://nyang-in.tistory.com/153
const util = require('util');

class Heap {
  #memory = [];

  constructor() {}

  swap(idx1, idx2) {
    const temp = this.#memory[idx1];
    this.#memory[idx1] = this.#memory[idx2];
    this.#memory[idx2] = temp;
  }

  getParentIdx(idx) {
    return ~~((idx - 1) / 2);
  }

  getLeftIdx(idx) {
    return idx * 2 + 1;
  }

  getRightIdx(idx) {
    return idx * 2 + 2;
  }

  getNode(idx) {
    return this.#memory[idx];
  }

  getParentNode(idx) {
    return this.#memory[this.getParentIdx(idx)];
  }

  getLeftNode(idx) {
    return this.#memory[this.getLeftIdx(idx)];
  }

  getRightNode(idx) {
    return this.#memory[this.getRightIdx(idx)];
  }

  peek() {
    return this.#memory[0];
  }

  size() {
    return this.#memory.length;
  }

  [util.inspect.custom]() {
    return this.#memory;
  }

  bubleUp() {}
  bubleDown() {}

  push(node) {
    this.#memory[this.#memory.length] = node;
    this.bubleUp();
  }

  pop() {
    let node = this.#memory[0];
    this.#memory[0] = this.#memory[this.#memory.length - 1];
    this.#memory.pop();
    this.bubleDown();
    return node;
  }
}

class MaxHeap extends Heap {
  bubleUp() {
    let idx = this.size() - 1;
    while (
      this.getParentNode(idx) &&
      this.getParentNode(idx) < this.getNode(idx)
    ) {
      this.swap(idx, this.getParentIdx(idx));
      idx = this.getParentIdx(idx);
    }
  }

  bubleDown() {
    let idx = 0;

    while (
      (this.getLeftNode(idx) !== undefined &&
        this.getLeftNode(idx) > this.getNode(idx)) ||
      this.getRightNode(idx) > this.getNode(idx)
    ) {
      let largeIdx = this.getLeftIdx(idx);
      if (
        this.getRightNode(idx) !== undefined &&
        this.getRightNode(idx) > this.getNode(largeIdx)
      ) {
        largeIdx = this.getRightIdx(idx);
      }
      this.swap(idx, largeIdx);
      idx = largeIdx;
    }
  }
}

class MinHeap extends Heap {
  bubleUp() {
    let idx = this.size() - 1;

    while (
      this.getParentNode(idx) !== undefined &&
      this.getParentNode(idx) > this.getNode(idx)
    ) {
      this.swap(idx, this.getParentIdx(idx));
      idx = this.getParentIdx(idx);
    }
  }

  bubleDown() {
    let idx = 0;

    while (
      (this.getLeftNode(idx) !== undefined &&
        this.getLeftNode(idx) < this.getNode(idx)) ||
      this.getRightNode(idx) < this.getNode(idx)
    ) {
      let smallerIdx = this.getLeftIdx(idx);
      if (
        this.getRightNode(idx) !== undefined &&
        this.getRightNode(idx) < this.getNode(smallerIdx)
      ) {
        smallerIdx = this.getRightIdx(idx);
      }

      this.swap(idx, smallerIdx);
      idx = smallerIdx;
    }
  }
}

module.exports = {
  MinHeap,
  MaxHeap,
};
