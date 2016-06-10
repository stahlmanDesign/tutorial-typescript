// typescript feature to show what types can be used
interface Person {
    Justin: string;
    age: number;
}
interface Thing{
    name: string;
    amount: number;
}
class Greeter {
    a: Thing[];
    // private feedData: Observable<Submission[]>;
    
    sayHello(a) {
        let i: number = 0;
        for (i = 0; i < a.length; i++){
        document.write(i + " asdfasdf " + a[i] +"<br/>")
        }
    }
}
function sortByName(a: Person[]) {
    var res = a.slice(0);
    res.sort((x, y) => {
        return x.Justin.localeCompare(y.Justin);
    });
    return res;
}
const a = "a"
function test(val){
    return val
}
test(a);

sortByName([{ Justin: "Joe", age: 42 }]);

var gree = new Greeter()

var myArray = ["toe","bag","kid","space","gown"]
gree.sayHello(myArray)