
public class Solution {

    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
        for (int stone : stones) {
            maxHeap.add(stone);
        }

        while (maxHeap.size() > 1) {
            int largerWeight = maxHeap.poll();
            int smallerWeight = maxHeap.poll();
            maxHeap.add((largerWeight - smallerWeight));
        }
        return maxHeap.poll();
    }
}
