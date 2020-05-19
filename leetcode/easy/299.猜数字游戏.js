/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const s1 = (secret + '').split('');
    const s2 = (guess + '').split('');
    let countA = 0;
    let countB = 0;

    // seek A
    s1.forEach((num, index)=>{
        if(num == s2[index]){
            countA ++;
            // 表已近匹配到公牛
            s1[index] = s2[index] = 'A';
        }
    })

    // seek B
    s1.forEach((num, index)=>{
        // 没有被公牛匹配到的 去匹配母牛
        const s2Index = s2.indexOf(num);
        if(num !== 'A' && s2Index > -1){
            // 表被母牛匹配到，避免重复匹配
            s2[s2Index] = 'B';
            countB++
        }
    })

    return `${countA}A${countB}B`;
};
// @lc code=end
