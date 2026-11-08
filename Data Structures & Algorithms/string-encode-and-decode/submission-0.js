class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let result="";
        for(let str of strs)
        {
            result+=str.length + '#' + str;
          

        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let words=[];
        let position=0;
        // str=3#CAT4#word
        while(position<str.length)
        {
            let hashIndex = str.indexOf("#", position); //1 , 6
            let wordLength = Number(str.slice(position, hashIndex));//3 , 4
            let wordStart = hashIndex + 1; //2 , 7
            let wordEnd= wordStart + wordLength;//5 , 11
            words.push(str.slice(wordStart, wordEnd));//CAT , word
            position = wordEnd; // 5 11


        }
        return words;
    }
}
