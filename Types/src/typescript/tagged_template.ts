function logTestResults(strings: TemplateStringsArray, passed: number, failed: number): string {
    let stringWithValues = strings
        .join('')
        .replace('Passed: ', `Passed: ${passed}`)
        .replace('Failed: ', `Failed: ${failed}`)
    let exclamation = failed === 0 ? 'Yay! ' : 'Oh no :( '
    return exclamation + stringWithValues
}
let passed = 20
let failed = 0
console.log(logTestResults`Passed: ${passed}, Failed: ${failed}`)
// Yay! Passed: 20, Failed: 0