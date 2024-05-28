const myobj = {
    js: 'javascript',
    cpp: 'cplusplus',
    rb: 'ruby',
    swift: 'swiftbyapple'
}

for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`)
}

// forin loop is also used for arrays but it gives a key only as index of array
// forin loop is not used for map in same way as for arrays due to non iteratable