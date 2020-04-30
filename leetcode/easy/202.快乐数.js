/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let set = new Set()
	n = n + ''
	let sum = 0
	while (sum !== 1) {
		sum = 0
		for (let i = 0; i < n.length; i++) {
			sum = sum + n[i] * n[i]
		}
		if (set.has(sum)) return false
		n = sum + ''
		set.add(sum)
	}
	return true
};
// @lc code=end

