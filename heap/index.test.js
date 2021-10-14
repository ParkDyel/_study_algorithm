const { MaxHeap, MinHeap } = require('./index.js');

describe('Max Heap', () => {
  test('insert', () => {
    const heap = new MaxHeap();
    heap.push(2);
    expect(heap.peek()).toBe(2);
    expect(heap.size()).toBe(1);
  });
});
