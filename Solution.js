
const {PriorityQueue} = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const maxHeap = new MaxPriorityQueue({compare: (first, second) => second - first});
    for (let stone of stones) {
        maxHeap.enqueue(stone);
    }

    while (maxHeap.size() > 1) {
        let largerWeight = maxHeap.dequeue();
        let smallerWeight = maxHeap.dequeue();
        maxHeap.enqueue((largerWeight - smallerWeight));
    }
    return maxHeap.dequeue();
};
