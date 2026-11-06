class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const freq= new Map();
      for (let i=0; i<nums.length; i++)
      {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
      }
    const buckets= Array.from({length:nums.length+1},()=>[]);
     for(const[num, numFreq]of freq )
     {
      buckets[numFreq].push(num);
     }
     const res=[];
     for(let i=buckets.length-1;i>0;i--)
     {
        for(const num of buckets[i])
          {
            res.push(num);
            if (res.length === k) return res;
          }
     }
       return res;
    }
}
