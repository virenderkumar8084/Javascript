const coding = ["ruby", "python", "java", "cpp", "c"]

coding.forEach((item) => {
    console.log(item)
})
function printme(item) {
    console.log(item)
}
coding.forEach(printme)
coding.forEach((item, index, coding) => {
    console.log(item, index, coding)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item) => {
    console.log(item);
})