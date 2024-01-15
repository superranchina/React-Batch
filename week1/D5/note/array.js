const items = [
    {name: 'bike', price: 100},
    {name: 'tv', price: 200},
    {name: 'book', price: 10},
    {name: 'phone', price: 600},
    {name: 'guitar', price: 2000},
    {name: 'computer', price: 1000}
]

 const filterItems = items.filter((item) => {
    return item.price <= 100
 })

 console.log(filterItems); 

const itemNames = items.map((item) => {
    return item.name
});

console.log(itemNames);

const foundItems = items.find((item) => {
    return item.name === "book"
})

items.forEach((item) => {
    console.log(item.price)
});

const total = items.reduce((currentTotal,item) => {
    return item.price + currentTotal
}, 0)

