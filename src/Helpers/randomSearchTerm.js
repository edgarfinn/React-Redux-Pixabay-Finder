export default() => {
  const searchOptions = [
      "man","mountain","state","ocean","country","building","cat","airline","wealth","happiness","pride","fear","religion","bird","book","phone","rice","snow","water"
    ];

    // Fisher Yates shuffle
    var currentIndex = searchOptions.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      // Pick a remaining developer
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current developer.
      temporaryValue = searchOptions[currentIndex];
      searchOptions[currentIndex] = searchOptions[randomIndex];
      searchOptions[randomIndex] = temporaryValue;
    }
    return `${searchOptions[0]}`;
  }
