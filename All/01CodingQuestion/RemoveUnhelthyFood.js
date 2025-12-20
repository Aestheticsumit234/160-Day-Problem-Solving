const Arryss = ['Chawal', 'Baal', 'Babji', 'Burger']


function removeJunkFood(foodList) {
    for (let i = 0; i < foodList.length; i++) {
        if (foodList[i] === 'Burger') {
            foodList.splice(i, 1)
        }
    }
    return foodList

}

console.log(removeJunkFood(Arryss));

