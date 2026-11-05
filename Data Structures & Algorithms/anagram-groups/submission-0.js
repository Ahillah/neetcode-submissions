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
            const arr=group.get(key);
            arr.push(str);
         }
         else{
            const arr=[];
            arr.push(str);
            group.set(key,arr);

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
