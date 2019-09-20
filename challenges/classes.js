// 1. Copy and paste your prototype in here and refactor into class syntax.
//--------------Prototypes------------------------------------
// function CuboidMaker(dimensions) {
//     this.width = dimensions.width;
//     this.height = dimensions.height;
//     this.length = dimensions.length;
//   }

// CuboidMaker.prototype.volume = function () {
//     return (this.width * this.height * this.length);
// }

// CuboidMaker.prototype.surfaceArea = function () {
//     return (((this.width * this.length) + (this.height * this.length) + (this.height * this.width)) * 2);
// }
//----------------- Class Syntax-------------------------

class CuboidMaker {
    constructor(dimensions){
    this.width = dimensions.width;
    this.height = dimensions.height;
    this.length = dimensions.length;
    }

    volume(){
        return (this.width * this.height * this.length);
    }

    surfaceArea(){
        return (((this.width * this.length) + (this.height * this.length) + (this.height * this.width)) * 2);
    }
}

//---------------------- Objects-----------------
const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.