class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length === 0 ||
         s.length === 0 ||
          t.length > s.length) return "";

        const targetFrequency = new Map();
        const windowFrequency = new Map();

        for (const char of t) {
            targetFrequency.set(char,
             (targetFrequency.get(char) || 0) + 1);
        }

        let left = 0;
        let matchedChars = 0;
        let minLength = s.length + 1;
        let start = 0;

        for (let right = 0; right < s.length; right++) {
            const rightChar = s[right];

            windowFrequency.set(rightChar, (windowFrequency.get(rightChar) 
            || 0) + 1);

            if (
                targetFrequency.has(rightChar) &&
                windowFrequency.get(rightChar) 
                === targetFrequency.get(rightChar)
            ) {
                matchedChars++;
            }

            while (matchedChars === targetFrequency.size) {
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1;
                    start = left;
                }

                const leftChar = s[left];

                if (
                    targetFrequency.has(leftChar) &&
                    windowFrequency.get(leftChar) 
                    === targetFrequency.get(leftChar)
                ) {
                    matchedChars--;
                }

                windowFrequency.set(leftChar, 
                windowFrequency.get(leftChar) - 1);
                left++;
            }
        }

        if (minLength === s.length + 1) return "";
        return s.substring(start, start + minLength);
    }
}