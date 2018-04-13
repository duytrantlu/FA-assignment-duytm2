# ES6
## 1.1 Reference:
### 1.1.1 ES6:  http://blog.thefirehoseproject.com/posts/12-reasons-es6-future-javascript-web-development/
### 1.1.2 ES6 Features 
    1. https://github.com/lukehoban/
    2. http://es6-features.org/#Constants
### 1.1.3 JS Engines: https://developer.telerik.com/featured/a-guide-to-javascript-engines-for-idiots/
### 1.1.4 Transpiler: https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them
## 1.2 History
### 1.2.1 What's is ECMAScript ?
    * Javascript được phát minh bởi Brendan Eich năm 1995, và trở thành 1 bản chuẩn ECMA năm 1997. ECMA-262 là tên chính thức của bản chuẩn đó, ECMAScript là tên chính thức của ngôn ngữ.
### 1.2.2 What is JavaScript Engine ? Can you name a few JavaScript Engine used in some popular Browsers such as Chrome, Firefox, IE
    * Javascript Engine được ví giống như 1 máy ảo, chúng được thiết kế đặc biệt để phiên dịch và thực thi mã javascript.
    * 1 vài Javascript Engine được sử dụng phổ biến là:
        - Engines V8 dùng cho Chrome
        - JavaScriptCore dùng cho Safari
        - Spidermonkey dùng cho Mozzila Firefox
        - Chakra dùng cho IE
### 1.2.3 What is Future JavaScript ?
    * Ngày nay, hầu hết tất cả các trang web đều sử dụng mã Javascript, ngoài việc dùng để viết kịch bản phía client, thì giờ đây JS đã được sử dụng để viết và xử lý ở phía server thông qua NodeJs, có rất nhiều các gã khổng lồ về công nghệ như Google, Mozzila hoặc Apple cũng đang cạnh tranh trong việc xây dựng những trình thông dịch Javascript, vì vậy, JS tương lai sẽ cần bổ sung thêm những tính năng và công nghệ mới nhất để có thể cạnh tranh với các ngôn ngữ khác.
### 1.2.4 What is problem you have if you want to use Future JavaScript in Present Browsers?
    * Qua mỗi phiên bản ECMAScrip thì cú pháp và cách thức mà nó hoạt động sẽ có sự thay đổi đôi chút và nếu như Present Browsers không được update liên tục thì sẽ sảy ra lỗi, để khắc phục các lỗi đó thì mã Future JS cần được thông dịch sang mã JS ở các đời đầu để mọi trình duyệt có thể hiểu và thực thi.
### 1.2.5 What is transpiler ?
    * Transpiler or source-to-source compliers, là 1 công cụ để đọc mã nguồn được viết của 1 ngôn ngữ, và tạo ra mã tương đương trong 1 ngôn ngữ khác, những ngôn ngữ biên dịch sang JS thường được gọi là ngôn ngữ compile-to-JS, và mục đích là để chuyển thành mã JS.
### 1.2.6 What is Babel ? Try Babel online here: https://babeljs.io/repl/
    * Babel là 1 trình thông dịch JS, được dùng để chuyển mã ES6 về mã ES5.
## 1.3 Arrow Function
### 1.3.1 Arrow function syntax
    * cú pháp của arrow function trong es6 có nhiều thay đổi so với anonymous function trong es5:
    -   arrow function syntax:
        var nums=[1,2,3,4,5,6];
        this.nums.forEach((v)=>{
            console.log(v)
        })
    -   ES5 function syntax:
        this.nums.forEach(function (v){
            console.log(v);
        })
### 1.3.2 Compare arrow function syntax to ES5 function syntax ?
    * Arrow function có cú pháp ngắn hơn ES5 function.
### 1.3.3 Arrow function variations, try them in Babel Repl, fix error if any
```
        const f1 = () => 10;
        const f2 = x  => 3;
        const f3 = (...x) => 3;
        const f4 = (x, y) => 3;
        const f5 = x => {
        try {
            1;
        } catch (e) {}
        }
        const f6 = x => { return 10; }
        const f7 = x => { y: x }
```
    * trong ví dụ trên thì hàm f7 đúng về mặt cú pháp, nhưng sai về mặt ngữ nghĩa.
        - sửa: const f7= x =>({ {y:x})
### 1.3.4 True or false: arrow functions are anonymous ?
```
    const myFunc = x => 4;
    console.log(myFunc.name);
```
    * hàm khai báo là arrow function, câu lệnh console.log sẽ ra kết quả undefined, arrow function là 1 biểu thức hàm anonymous chứ ko phải là 1 hàm anonymous.
### 1.3.5 this
    1. Evaluate the code below, can you explain what happens ?
```
var obj = {
  a: 10,
  method: function method() {
    setTimeout(function () {
        console.log(this.a);
    }, 200);
  }
}

var obj2 = {
  a: 10,
  method: function method() {
    setTimeout(() => {
        console.log(this.a);
    }, 200);
  }
}

obj.method(); // ??
obj2.method();
```
    * khi chạy câu lệnh obj.method(), thì function method() trong obj sẽ được thực thi, khi method() chạy thì bên trong nó là sẽ gọi setTimeout(), bản chất setTimeout là 1 function rồi, bên trong nó còn có 1 hàm callback được thực thi nữa nên this trong hàm callback lúc này sẽ trỏ đến window, vì vậy khi thực hiện xong sẽ hiển thị undefined ra màn hình.
    * khi chạy câu lệnh obj2.method(), thì function methed() trong obj2 sẽ được thực thi, khi methed() chạy thì hàm setTimeout bên trong nó sẽ được thực thi, hàm callback bên trong setTimeout() sẽ được gọi, this lúc này sẽ trỏ đến thằng cha kế cận nơi hàm được được gọi được khai báo, vì vậy kết qủa hiển thị ra là 10.
### 1.3.6 Promise
    1. Compare 2 Promise call below, what do you think ? If v is null or undefined what will happend ? How you handle that ?
```
p.then(function (v) { return v.id });

p.then(v => v.id);
```
    * 2 cách gọi Promise là như nhau, đều cùng trả về kết qủa là id của đối tượng mà resolve trả về trong promise,
    * nếu v null hoặc undefined thì sẽ báo lỗi TypeError, và để xử lý nó chúng ta thêm try catch bên trong callback function của hàm .then().
### 1.3.7
    * Exercise 01: rewrite all function below with arrow functions and try to avoid curly braces {} as much as possible
```
(function iife(){

    var  foo=(x)=> {
      var y = x * 2;
  
      return function(z, baz) {
        if (z.length > 3) {
          return z.map(baz=(v)=>{
            if (v > 3) return v + y;
            else return baz( v * 4 );
          } );
        }
        else {
          var obj = [];
  
          setTimeout(()=>{
            obj.length = 1;
            obj[0] = this.w;
          }, 100 );
  
          return obj;
        }
      };
    }
  
    var p = foo( 2 );
    var list1 = [1,3,4];
    var list2 = list1.concat( 6 );
  
    list1 = p.call( { w: 42 }, list1 );
    list2 = p( list2 );
  
    setTimeout( ()=>{
      console.log( list1[0] === list2.reduce((s,v)=>s + v, 0 ) );
    }, 200 );
  })();
```
    * viết lại dùng arrow function
```

```
## 1.4 Block Scope
### 1.4.1 Compare let and var
    * từ khoá khai báo var và let trong JS có sự khác biệt nhau chính là scope của nó.
        - trong khi nếu khai báo biến với 'var', chúng ta có thể tạo ra 1 biến có phạm vi truy cập xuyên suốt function chứa nó, còn 'let' sẽ tạo ra 1 biến chỉ có thể truy cập được trong block bao quanh nó.
        - ví dụ:
            + khai báo với var:
                function foo(){
                    var x=20;
                    if(true){
                        var x=10;
                        console.log(x) // ở đây sẽ in ra 10;
                    }
                    console.log(x) // ở đây cũng sẽ in ra 10
                }
            + khai báo với let:
                fucntion foo(){
                    let x=20;
                    if(true){
                        let x=10;
                        console.log(x) // ở đây sẽ in ra 10;
                    }
                    console.log(x) // ở đây sẽ in ra 20
                }
    * ngoài ra với biến được khai báo 'var' khi ở global scope, sẽ có 1 global object trỏ đến nó là this, còn 'let' thì không.
        - ví dụ:
            var a=10;
            let b=10;
            console.log(this.a) //ở đây sẽ là 10
            console.log(this.b) // ở đây sẽ là undefined
### 1.4.2 Closures scope, how do let work in closures, try example below

```
for (let i = 0; i < 3; i++) {
  let btn = document.getElementById('btn' + i);
  btn.addEventListener('click', () {
    alert(i);
  });
}
```
    * với khai báo 'let' thì giá trị trả về trong những callback function được chứa trong vòng lặp sẽ giống như closure scope, tức là nó sẽ tự lưu được giá trị scope của nó,
### 1.4.3 What is const ? Example ?
    * Const là 1 block-scope, giống nhiều so với câu lệnh định nghĩa 'let', giá trị của 1 biến được khái báo const là không thể thay đổi qua việc gán lại và không thể được khởi tạo lại.
        - ví dụ:
            const a=10;
            a=20 // ở đây sẽ báo lỗi TypeerrorTypeerror
            hoặc const a=20 // ở đây sẽ báo lỗi SyntaxErrorSyntaxError
### 1.4.4 Exercise: fix code below (anywhere) so the console.log will display true
```
var x = 2, fns = [];

(function(){
  var x = 5;

  for (var i=0; i<x; i++) {
  }
})();

console.log((x * 2) === fns[x*2]()); // must be true
```
    * sửa
```
var x = 2, fns = [];

(function(){
  var x = 5;

  for (let i=0; i<x; i++) {
    fns[i]=function (){
        return i;
    }
  }
})();

console.log((x * 2) === fns[x*2]()); // true
```
