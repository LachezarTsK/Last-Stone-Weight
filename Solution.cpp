
#include <queue>
#include <vector>
using namespace std;

class Solution {
    
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> maxHeap;
        for (const auto& stone : stones) {
            maxHeap.push(stone);
        }

        while (maxHeap.size() > 1) {
            int largerWeight = maxHeap.top();
            maxHeap.pop();
            int smallerWeight = maxHeap.top();
            maxHeap.pop();
            maxHeap.push((largerWeight - smallerWeight));
        }
        return maxHeap.top();
    }
};
