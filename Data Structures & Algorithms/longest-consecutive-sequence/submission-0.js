class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       // nums = [0,3,2,5,4,6,1,1]
        const set = new Set(nums); // 0 3 2 5 4 6 1
        let longest=0;
        for(const num of set)
        {
            if(!set.has(num-1))
             { let count=1;
              while(set.has(num + count))
               count++; //2 3 4 5 6 7
               longest = Math.max(longest, count);// 2 3 4 5 6 7
        }
        }
          return longest;
        }
    }

