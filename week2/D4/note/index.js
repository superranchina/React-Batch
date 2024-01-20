const packages = require('./packages.js');
const shows = require('./shows.js');

const averagePrice = (packages) => {
    let sum = 0;
    const len = packages.length;
    for (let i = 0; i < len; i++) {
        sum += packages[i].price;
    }
    return sum/len;
}

const getCheapestPackage = (title) => {
    //get network with input title
    //go to package and then see which package has this network
    //find the cheapeast one
    //NOTE: filter returns a new array with all elements that meet a condition.
    //find returns the first element that meets a condition or undefined if none is found.

    const _show = shows.find((show_name) => show_name.title === title);
    const net_work = _show.network;

    // const { network } = shows.find((show_name) => show_name.title === title);

    //packArr is an arr with wanted network.
    const packArr = packages.filter((pack) => {
        return pack.networks.includes(net_work)
    });

    //compare price in packArr
    let min_pack = packArr[0];
    packArr.forEach((pack) => {
        if (pack.price < min_pack.price) {
            min_pack = pack;
        };
    });
    return min_pack.name;


}

// console.log(getCheapestPackage('Dexter'));


// //create a function that takes in two parameters,
// //a package name and a rating(number between 0 and 10),
// //and returns all shows available with that package,
// //with that rating or higher

function filter_shows(pack_name, rating) {
    //locate package in packages.js, get networks;
    const thePackage = packages.find((pack)=> {
        return pack.name === pack_name;
    })
    const net_work = thePackage.networks;
    // console.log(net_work);

    //filter the shows by netwrok
    shows_arr = shows.filter((show) =>net_work.includes(show.network));

    // console.log(shows_arr);
    //then filter with rating.
    return filtered_shows = shows_arr.filter((show) => show.imdbRating >= rating); 
}

function better_filter_shows(pack_name, rating) {

    const thePackage = packages.find((pack)=> {
        return pack.name === pack_name;
    })
    const net_work = thePackage.networks;

    return shows.filter((show) =>net_work.includes(show.network))
                    .filter((show) => show.imdbRating >= rating);

}

console.log(better_filter_shows('Basic', 4));

//given an array and a chunk size, divide the
//array into many sub-arrays where each sub-array
//has the specified length. E.g
//chunkArray([1,2,3,4,5,6,7,8,9,10,11,12,13],5)
//should return [[1,2,3,4,5],[6,7,8,9,10],[11,12,13]]

function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }
  
  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunkSize = 5;
  const chunkedArray = chunkArray(originalArray, chunkSize);
  
  console.log(chunkedArray);
  