const list = ['anar', 'hgs', 'hgs', 'hgiuys', "Phone"]
function findPhone(items) {
    // Return the index of "Phone" in the items array
    for (let i = 0; i < items.length; i++) {
        if (items[i] == "Phone") {
            return i
        }
    }
}
console.log(findPhone(list))