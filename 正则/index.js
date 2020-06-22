let h = `<span>吴姗姗</span>`
// console.log(h.match(/^<span>[\s\S]+<\/span>$/))

let g = 'Yyx_good_boy'
// console.log(g.match(/y/ig))
g = g.replace(/y/gi,'%')
// console.log(g)

let yyx = '#1 yyx1 # #2 yyx2 # #3 yyx3 # #4 yyx4 #'
// console.log(yyx.match(/^#\.#$/)    )

let time = '2020/02/24'
let time2 = '2020-02-24'
let reg = /^\d{4}[-\/]\d{2}[-\/]\d{2}/
console.log(time.match(reg))
console.log(time2.match(reg))