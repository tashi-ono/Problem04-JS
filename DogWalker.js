class DogWalker {
  numberOfWalksCalculator(dogSizes) {
    // Not sure why numberOfWalks was instantiated to -1 instead of 0;
    // Will check in with instuctors...
    let numberOfWalks = 0;
    let dogList = {};
    for (let size of dogSizes) {
      dogList[size] = dogList[size] + 1 || 1;
    }
    console.log(dogList);

    for (let category in dogList) {
      numberOfWalks = numberOfWalks + Math.ceil(dogList[category] / 2);
      //   console.log(numberOfWalks);
    }

    return numberOfWalks;
  }
}

module.exports = DogWalker;
