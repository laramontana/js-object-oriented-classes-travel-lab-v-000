class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()-1;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    function horizontalToIndex(location) { return eastWest.indexOf(location) }
    const horizontalBlocks = horizontalToIndex(this.endingLocation.horizontal) - horizontalToIndex(this.beginningLocation.horizontal)
    const verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical

    return horizontalBlocks + verticalBlocks
  }

  estimatedTime(peak) {
    if (peak) { return this.blocksTravelled()/2 }
    else { return this.blocksTravelled()/3 }
  }
}
