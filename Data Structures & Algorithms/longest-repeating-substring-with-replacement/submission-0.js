class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    let left = 0;
    let maxFrequency = 0;
    let maxLength = 0;
   let freq = new Map();
   for (let right = 0; right < s.length; right++) {
    let char = s[right];

   freq.set(char, (freq.get(char) || 0) + 1);
   maxFrequency = Math.max(
    maxFrequency,
    freq.get(char)
);
  while((right-left+1)- maxFrequency > k)
  {
    let leftChar= s[left];
    freq.set(leftChar, freq.get(leftChar) - 1);
    left++;
  }

  maxLength= Math.max(right-left+1,maxLength );

   }
    return maxLength;



    }
}
