class Solution {
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const toIndex = (ch) => ch.charCodeAt(0) - 97;
        const s1Count = new Array(26).fill(0);
        const window = new Array(26).fill(0);

        const isMatch = () => s1Count.every((count, i) => count === window[i]);

        for (let i = 0; i < s1.length; i++) {
            s1Count[toIndex(s1[i])]++;
            window[toIndex(s2[i])]++;
        }
        if (isMatch()) return true;

        for (let right = s1.length; right < s2.length; right++) {
            window[toIndex(s2[right])]++;
            window[toIndex(s2[right - s1.length])]--;
            if (isMatch()) return true;
        }

        return false;
    }
}