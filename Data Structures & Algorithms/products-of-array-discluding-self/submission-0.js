class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let i=0;
        let j=nums.length-1;
        let prefix=[];
        let suffix=[];
        let products=[];
        while(i<nums.length && j>=0)
        {   if(i==0)
             prefix[i]=1;
             else{
            prefix[i]=prefix[i-1]*nums[i-1];
             }
           
             if(j==nums.length-1)
              {
                suffix[j]=1;
              }
              else{
                suffix[j]=suffix[j+1]*nums[j+1];
              }
           

           
                i++;
                j--;

        }
        for(let i=0; i< nums.length; i++)
        {
               products[i]=prefix[i]*suffix[i];
        }
        return products;

    }
}
