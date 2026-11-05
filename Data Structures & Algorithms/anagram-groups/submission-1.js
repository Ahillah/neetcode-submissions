class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group= new Map();
       for(const str of strs)
       {
         const key = this.toArray(str).join(",");
         if(group.has(key))
         {
            group.get(key).push(str);
          
         }
         else{
            group.set(key,[str]);

         }
          
       }
          return Array.from(group.values());
  
    }

     toArray(str) {
        const asci=97;
        const arr = new Array(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            const index = str.charCodeAt(i) - asci;
            arr[index]++;
        }

        return arr;
    }
}
