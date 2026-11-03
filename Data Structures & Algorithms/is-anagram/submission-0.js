class Solution {
    
    isAnagram(s, t) {
        if (s.length !== t.length)
        return false;

        let freqS={};
        let freqT={};
        for(let char of s )
         {
            freqS[char]= (freqS[char]||0)+1;
         }
          for(let char of t )
         {
            freqT[char]= (freqT[char]||0)+1;
         }
         
         for(let char of s)
         {
            if(freqS[char]!==freqT[char])
            return false;
         }
         return true;
    }
}
