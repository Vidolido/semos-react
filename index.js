const cars = [
    {
        year: '2010',
        type: 'Golf',
        model: 'Hunchback'
    },
    {
        year: '2016',
        type: 'Audi',
        model: 'Sedan'
    },
    {
        year: '2018',
        type: 'Toyota',
        model: 'Sedan'
    },
];

let mapCars = cars.map(car => {
    let printCars = `${car.type} ${car.model} - ${car.year}`;
    return printCars;
});

console.log(mapCars);