const cookie = {
    name : "Chocolate Chip",
    isGlutenFree: false,
    eatCookie: function() {
        console.log("I am eating "+ this.name);
    }
};

cookie.name = "Chip Chocolate";
cookie.isGlutenFree = true;
console.log(cookie);

cookie.eatCookie();


class Cookie {
    constructor(name,isGlutenFree){
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }
}
const myCookie = new Cookie("Iced Oatmeal", false);

console.log(myCookie);