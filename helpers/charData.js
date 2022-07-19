export const charDataGenerated = (list) => {
    const charData = []

    list.forEach((item) => {
        item.transactions.forEach((elem) => {
            elem.isIncome ? charData.push(elem.budgetAfter) : null
        })
    })
    if(charData.length >= 0) {
        if(charData.length === 0) {
            return [...charData, 0, 0, 0, 0, 0, 0]
        } else if (charData.length === 1) {
            return [...charData, 0, 0, 0, 0, 0]
        } else if (charData.length === 2) {
            return [...charData, 0, 0, 0, 0]
        } else if(charData.length === 3) {
            return [...charData, 0, 0, 0]
        } else if (charData.length === 4) {
            return [...charData, 0, 0]
        } else if(charData.length === 5) {
            return [...charData, 0]
        } else return charData
    } else return [ 0, 0, 0, 0, 0, 0, 0 ]  
}