
function Hero(heroName, realName) {
  this.realName = realName;
  this.heroName = heroName;

  return {
    heroName: "Batman",
    realName: "Bruce Wayne",
  }
}
const superman = new Hero("Superman", "Clark Kent");
console.log(superman);
