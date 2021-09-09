exports.validation = (testData = [], fn = () => {}) => {
    for (let i = 0; i < testData.length; i++) {
        const testItem = testData[i]
        const result = fn(testItem.d || testItem)
        console.log(`[${i}]> `, testItem.r ? (result === testItem.r) : result)
    }

    console.log('[Validate] Finished!')
}
