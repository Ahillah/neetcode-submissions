class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const sArr = this.toArray(s);
        const tArr = this.toArray(t);

        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] !== tArr[i]) {
                return false;
            }
        }

        return true;
    }

    asciA = 97;

    toArray(str) {
        const arr = new Array(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            const index = str.charCodeAt(i) - this.asciA;
            arr[index]++;
        }

        return arr;
    }
}