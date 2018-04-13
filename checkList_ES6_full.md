# ES6 Part2
## Classes
### 1.4.1 Provide an example to create a new classed named Person which have 2 fields: id, name and 1 method: sayHello which print hello to the console
```
    class Person{
        constructor(id,name){
            this.id=id;
            this.name=name;
        }
        sayHello(){
            console.log(this.id + " " +this.name);
        }
    }
    let examp= new Person(1,'duy');
    examp.sayHello();
```
### 1.4.2 What is keyword extends and super, provide an example that used both keyword ?
    * super:
        - là 1 từ khóa được dùng để truy cập và gọi function trong 1 đối tượng cha.
    * extends
        - để tạo ra 1 class là con của 1 class khác.
- ví dụ:
```
            class Rectangle {
                constructor(height, width) {
                    this.name = 'Rectangle';
                    this.height = height;
                    this.width = width;
                }
                sayName() {
                    console.log('Hi, I am a ', this.name + '.');
                }
                get area() {
                    return this.height * this.width;
                }
                set area(value) {
                    this.height = this.width = Math.sqrt(value);
                }
                }

                class Square extends Rectangle {
                    constructor(length) {
                        this.height; // ReferenceError, super needs to be called first!
                        
                        // Here, it calls the parent class' constructor with lengths
                        // provided for the Rectangle's width and height
                        super(length, length);
            
                        // Note: In derived classes, super() must be called before you
                        // can use 'this'. Leaving this out will cause a reference error.
                        this.name = 'Square';
                    }
                }
```
### 1.4.3 Consider the following code, what will be printed out?
```
class Cha {
  constructor() { this.id = 'a' }
  method() {
    console.log('Cha', this.id)
  }
}

class Con extends Cha {
  method() {
    super.method();
    console.log('Con', this.id)
  }
}

let c = new Con();
c.method(); // hiển thị ra 'Cha a', 'Con a';
```

### 1.4.4 What is static keyword ?
    - static keyword được dùng để tạo 1 phương thức liên kết với 1 class nhưng không liên kết được với instance của class.
    - ví dụ: 
        class Person{
            static getName(){
                console.log('hello everybody');
            }
        }
        
        let p = new Person();
        p.getName(); // báo lỗi
## 1.5 Block Scope: let + const
    * phần này đã làm ở check list 01
## 1.6 Default Values and the Gather/Spread Operator
### 1.6.1 Default Values: how to define a functon with default value in ES5 ? And in ES6 ?
    * trong ES5, để định nghĩa 1 defaul value của function ta làm như sau:
        - ví dụ: 
            fucntion foo(a, b){
                if (y === undefined)
                    y = 7;
                if (z === undefined)
                    z = 42;
                return x + y + z;
            }
            foo(1) === 50
    * còn trong ES6, ta làm như sau:
        - ví dụ: 
            function foo (x, y = 7, z = 42) {
                return x + y + z
            }
            foo(1) === 50
### 1.6.2 Lazy expression, evaluate the following code, how many times g have been called ?
```
function g() {
  console.log('g');
}

function f(x = g()) {
}

f(1);// khi gọi f(1) thì lúc này g() sẽ ko được thực thi, 1 đc gán vào x và do bên trong f() ko có lệnh thực thi nên hiển thị undefined
f(); // khi không có tham số truyền vào thì g() sẽ được thực thi, lúc này sẽ hiển thị 'g'
f(); // hiển thị 'g'
```
### 1.6.3 Evaluate the following code
```
var x = 1;

function f(x = 2, fn = function() { return x }) {
  console.log(fn());
}

f();

```
    * khi gọi f(), với các giá trị mặc định của tham số ta sẽ có bên trong body của f() 1 biến x=2 được khởi tạo và fn là 1 fucntion, tiếp theo là console.log(fn()) để thực thi fn() với x=2 được return. => f() có kqua hiển thị ra là 2.
### 1.6.4 What's a variadic arguments?
    * a variadic arguments là 1 chức năng của arity không xác định (arity là các đối số hoặc các toán hạng mà hàm nhận), nghĩa là nó đại diện cho 1 số biến của các đối số.
### 1.6.5 What is arguments in a JavaScript function ?
    * arguments là 1 đối tượng giống mảng, tương ứng với các đối số được truyền đến 1 hàm.
### 1.6.6 … operator can be used in 2 differents ways, see code below:
```
function f(...args) { // gather arguments
    console.log(args);
}

var x = [1, 2, 3];
var y = [4, 5];
var z = [0, ...x, ...y ]; // spread out
f(x,y,z) // [[1,2,3],[4,5],[0,1,2,3,4,5]];
```
### 1.6.7 In which way the … operator is used in following code
```
function g(...arr) { // gather arguments 1,2,3,4,5,6
}

var a = [1, 2, 3];
var b = [4, 5, 6];

g(...a, ...b); //1,2,3,4,5,6

```
### 1.6.8 Exercise: fix the following code so console.log will print true
```
function f(...arr) { 
	
	arr.splice(1,2);
	return arr;
}

function g() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];

  return f(...a1,...a2);
}

console.log(g().join("") === "281012"); 

```
## 1.7 Destructuring
### 1.7.1 What is destructuring ? Example ?
    * destructuring là 1 cú pháp của biểu thức javascript, cái mà có khả năng giải nén các phần tử từ mảng hoặc thuộc tính từ object thành các giá trị riêng biệt.
    - ví dụ:
        [a, b] = [10, 20];
        console.log(a);
        // expected output: 10
        console.log(b);
        // expected output: 20
        [a, b, ...rest] = [10, 20, 30, 40, 50];
        console.log(rest);
        // expected output: [30,40,50]
### 1.7.2 Can you use destructuring and default values together ? Provide example?
    * chúng ta có thể dùng destructuring và default values cùng nhau.
        - ví dụ:
            function multiply([a,c]=[5,2], b = 1) {
                return a * b*c;
            }
            console.log(multiply());
            // expected output: 10
            console.log(multiply([8,9]));
            // expected output: 72

### 1.7.3 Dumping values: provide example that extract the 3rd element in an array and don't care about the 1st, 2nd element ? Provide example that swap 2 numbers ?
    * example that extract the 3rd element in an array and don't care about the 1st, 2nd element
        let [,,c]=[1,2,3]
        console.log(c);// 5
    * example that swap 2 numbers ?
        let [a,b]=[4,5];
        - swap:
            [a,b]=[b,a];
### 1.7.4 Nested Array Destructuring: in case we have an array like this [[1, 2], [3, 4], [5, 6]] use destructuring to extract the number 1 to variabled called 'a':
    * let [[a,]]=[[1, 2], [3, 4], [5, 6]];
### 1.7.5 Object Destructuring: provide an example that use destructuring to extract property in an object ?
    * example that use destructuring to extract property in an object 
        - ví dụ: 
            var o = {p: 42, q: true};
            var {p, q} = o;
            console.log(p); // 42
            console.log(q); // true
### 1.7.6 Nested Object Destructuring: in case we have an object like this { nested: { a: 10 } }, provide an example that use destructuring to extract value of 'a' in inside nested object
    * let {nested:{a:a}}={ nested: { a: 10 } }
### 1.7.7 Destructuring and Function Parameters: consider the array destructuring for parameters what will be printed out ?
```
function fn([ x, y ]) {
  console.log(x, y);
}

fn([ 1, 2 ]); // 1,2
fn([ 1 ]); // 1 undefined
fn([ ]); // undefined undefined
```
### 1.7.8 Exercise: practice object destructuring, object constructuring
```
function ajax(url,cb) {
    // fake ajax response:
    
    cb({
      foo: 2,
      baz: [ 6, 8, 10 ],
      bam: {
        qux: 12
      }
    });
  }
  
  function check(data) {
      //console.log(data);
    console.log(
      56 === (
        data.foo +
        data.bar +
        data.baz[0] + data.baz[1] + data.baz[2] +
        data.bam.qux +
        data.bam.qam
      )
    );
  }
  
  var defaults = {
    foo: 0,
    bar: 4,
    bam: {
      qux: 0,
      qam: 14
    }
  };
  
  function response({foo:x,baz:[a,b,c],bam:{qux:z}}) {
  
    check({
    // // /* TODO: object constructuring */
        foo:defaults.foo+x,
        bar:defaults.bar,
        baz:[a,b,c],
        bam:{
            qux:defaults.bam.qux+z,
            qam:defaults.bam.qam
        }    
    });
  
  }
  
  ajax("http://fun.tld",response);
```
## 1.8  Object Literal Extensions
### 1.8.1 Concise properties: consider the following code what do you think ?
```
var x = 2, y = 3;
var o1 = {
  x: x,
  y: y
}

var o2 = {
  x,
  y
}
console.log(o1); // {x:2, y:2}
console.log(o2); // {x:2, y:2}

```
    * trong ES6 hỗ trợ việc rút gọn khai báo thuộc tính và value của object nếu tên thuộc tính trùng với tên biến chứa value của nó.
### 1.8.2 Concise Methods: consider the following code what do you think ?
```
var o1 = {
  x: function() {
    console.log('o1.x');
  },
  y: function() { }
}

o1.x();

var o2 = {
  x() {
     console.log('o2.x');
  },
  y() {}
}
o2.x();
```
    * 2 trường hợp khai báo là khác nhau về mặt cú pháp, khai báo method trong o1 thường được sử dụng nhiều trong ES5, khai báo method như trong o2 thì lên ES6 mới được hỗ trợ.
### 1.8.3 ES5 Getter/Setter: consider the following code
```
var o = {
  _id: 10,
  get id() { return this._id++; },
  set id(v) { this._id = v; }
}

o.id; // 11
o.id = 100;
o.id; // 101

```
## 1.9 Template Strings
### 1.9.1 Template Strings: what is template strings ?
    * template strings is a new type of string literal, using the ` backtick as the delimiter. These string literals allow basic string interpolation expressions to be embedded, which are then automatically parsed and evaluated
### 1.9.2 Consider this code below, rewrite it using ES6 template string
```
var name = 'That Duy';
var chaoDuy = `Hello ${name} !`;

console.log(chaoDuy);
console.log(typeof chaoDuy);

```
### 1.9.3 Interpolated Expression: can we use function inside ${…} if yes provide an example
    * we can use function inside ${...}
    * ví dụ:
        var ThatDuy = function(){return 'we can use';};
        console.log(`wow, ${ThatDuy()}`); // it'll display: wow, we can use.
### 1.9.4 Tag Functions: consider the code below
```
function f(strings, ...values) {
  console.log(strings);
  console.log(values);
}

var s = 'Fresher Academy';
f`Hello ${s}`; // ??
```





    


    



            

