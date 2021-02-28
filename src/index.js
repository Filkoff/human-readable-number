module.exports = function toReadable (num) {
  const first = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const tens = ['', '', 'twenty ','thirty ','forty ','fifty ', 'sixty ','seventy ','eighty ','ninety '];
    const big = ['', 'thousand ', 'million ', 'billion ', 'trillion ', 'quadrillion '];
    

    let numStr = num.toString()
    const arr = numStr.split("")
    let answer = []


    if (num === 0) {
        return "zero"
    }

    for (let i = 0; i<Math.ceil(numStr.length/3); i++){
        let add = big[i]
        let last = ""

        
        let a = arr.splice(-3,3)
        a=a.join("")


        if (parseInt(a)<20) {
            last += first[parseInt(a)] + add
        }

        else if (a.length<3) {
            last += tens[parseInt(a[0])] + first[parseInt(a[1])] + add
        }

        else if (a.length===3) {
            twoLast = parseInt(a.slice(1))
            if (twoLast<20) {
                last += first[parseInt(a[0])] + "hundred " + first[twoLast] + add
            } else {
                last += first[parseInt(a[0])] + "hundred " + tens[parseInt(a[1])] + first[parseInt(a[2])] + add
            }
        }
        
        answer.unshift(last)
        }
        return answer.join("").trim()
}
