const items = [{
    name: 'Orange',
    available: true,
    contains: "Vitamin C",
}, {
    name: 'Mango',
    available: true,
    contains: "Vitamin K, Vitamin C",
}, {
    name: 'Pineapple',
    available: true,
    contains: "Vitamin A",
}, {
    name: 'Raspberry',
    available: false,
    contains: "Vitamin A, Vitamin B",

}, {
    name: 'Grapes',
    contains: "Vitamin D",
    available: false,
}];


/*

    1. Get all items that are available 
    2. Get all items containing only Vitamin C.
    3. Get all items containing Vitamin A.
    4. Group items based on the Vitamins that they contain in the following format:
        {
            "Vitamin C": ["Orange", "Mango"],
            "Vitamin K": ["Mango"],
        }
        
        and so on for all items and all Vitamins.
    5. Sort items based on number of Vitamins they contain.

*/

//1. Get all items that are available 

const availableItems = items.filter((itemData) => {
    if (itemData.available) {
        return true;
    }
})
console.log(availableItems);

// 2. Get all items containing only Vitamin C.


const containVitaminC = items.filter((itemData) => {
    if (itemData.contains === "Vitamin C") {
        return true;
    }
})
console.log(containVitaminC);

//3. Get all items containing Vitamin A.

const containVitaminA = items.filter((itemData) => {
    if (itemData.contains.includes("Vitamin A")) {
        return true;
    }
})
console.log(containVitaminA);

// 4. Group items based on the Vitamins that they contain in the following format:

//5. Sort items based on number of Vitamins they contain.

const sortItemVitamins = items.sort((currentItem, nextItem) => {
    if (currentItem.contains.split(',').length > nextItem.contains.split(',').length) {
        return 1;
    }
    else {
        return -1;
    }
});
console.log(sortItemVitamins)
