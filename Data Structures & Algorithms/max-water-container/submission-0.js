class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let bar_1=0;
        let bar_2= heights.length - 1;
        let maxArea=0;
        while(bar_1 < bar_2)
        {  
            const width=  bar_2 - bar_1;
            const height = Math.min(heights[bar_1],  heights[bar_2]);
            if(height === heights[bar_1])
             bar_1++;
             else 
             bar_2 --;
              maxArea = Math.max(maxArea, width * height);

        }
        return maxArea;
    }
}
