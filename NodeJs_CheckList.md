# NodeJs Check List
## NodeJS introduction
### NodeJs là gì ?
    * Nodejs is a Javascript runtime build on Chrome'a V8 Javascript engine, NodeJs runs on various platforms (windown, linux, unix, OSX...), uses javascript to build server.
### Điểm mạnh và điểm yếu của NodeJs ?
    * advantage
        - NodeJs is new technology, its uses an envent-driven, non-blocking IO, that makes it lightweight and efficient.
        - NodeJs is free,
        - NodeJs uses assynchronous programing.
        - many modules to support,
        - generally, NodeJs eliminates waiting, and simply contineus with next request, run single-threaded, non-blocking I/O, asynchronous programing, which is very memory efficient.
    * disadvantage
        - Nếu bạn cần xử lý các ứng dụng tốn tài nguyên CPU như encoding video, convert file, decoding encryption... hoặc các ứng dụng tương tự như vậy thì không nên dùng NodeJS (Lý do: NodeJS được viết bằng C++ & Javascript, nên phải thông qua thêm 1 trình biên dịch của NodeJS sẽ lâu hơn 1 chút ). Trường hợp này bạn hãy viết 1 Addon C++ để tích hợp với NodeJS để tăng hiệu suất tối đa !(Việc tích hợp rất thân thiện và nhanh chóng).
        - là 1 công nghệ mới nên công đồng còn chưa lớn mạnh được như các ngôn ngữ như PHP, Ruby, .Net....
        - Nodejs + NoSQL là sự kết hợp hoàn hảo nhưng cũng là con dao 2 lưỡi nếu không hiểu rõ và sâu về chúng.
### V8 Engine là gì ?
    * Chrome v8 engine is an open-source Javascript engine developed by the Chromium Project for google Chrome and Chromium web browers.
    * V8 compiles Javascript directly to native machine code before executing it,instead of traditional techniques susch as interpreting bytecode or compiles the whole program to machine code and executing it from a filesystem.
### Nêu mô hình client - server ?. Cụ thế mô hình client server ở trong web service
    * client - server model is a distributed application structure that partition task or workloads between providers of a resource or service, called server, and service request called client.
    * example model:
        client1 (request)  \
        client2 (request) --  server (providers service or a resource).
        client3 (request) /
### Thế nào là code js ở phía server ?
    * code js ở phía server nghĩa là chúng ta sẽ viết code javascript để xử lý những request của người dùng gửi lên,
### Cài đặt node và kiểm tra phiên bản của node và npm ?
    * node --version
    * npm --version
### Use node CLI to run js script ?
    * node fileName.js
### Viết script để lắng nghe cổng 3000 trả về Hello World ?
```
    const http =  require("http");
    const host = "127.0.0.1";
    const port = 3000;

    const server = http.createServer((req,res)=>{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('Hello world');
        res.end();
    }).listen(port, host,(err)=>{
        if(err){
            console.log(err);
        }
        console.log(`server ${host} đang được khởi chạy ở cổng ${port}`);
    })
```

## NPM
### NPM là gì ?. Nêu các lợi ích khi sử dụng trình quản lí package ?
    * NPM là 1 trình quản lý package cho Javascript và những phần mềm lớn trên thế giới, khám phá những package có thể sử dụng lại được và nhúng chúng theo 1 cách mới.
    * Lợi ích khi sử dụng trình quản lý package:
        - dễ ràng quản lý 1 package ( install, remove module, chia sẻ và phân bổ code ), test code;
### File package.json dùng để làm gì ? Cách tạo file và nêu chức năng của từng trường trong file package.json
    * file package.json dùng để quản lý, thiết lập cài đặt cho các node_modules, quản lý version của package
    * để tạo file, chúng ta có thể dùng lệnh trên CLI:
        - npm init hoặc yarn init
        - các trường trong file package.json gồm:
            + name: Tên của project hoặc package, nên viết hoa cho thuộc tính name. Đây là thuộc tính bắt buộc. Ngoài ra chúng ta có thể public project của mình, thì thuộc tính name này sẽ là package name, nên cái này phải là duy nhất.
            + version: version của project
            + description: Đoạn mô tả của project. Chú ý viết ngắn gọn xúc tích rõ ràng dễ hiểu, không hư cấu nhé.
            + main: file chính trong project (file sẽ dùng để thiết lập midleware)
            + scripts: các setup của cho từng package.
            + author: Thông tin về tác giả.
            + dependencies: Cái này quan trọng đây. Trong project, bạn sẽ phải sử dụng rất nhiều gói, những gói này đã được viết sẵn, chỉ cần require rồi sử dụng, trong này sẽ chứa các package mà để run project.
            + devDependencies: cái này để quản lý các package khi build project.
            + license: bản quyền
### Dependency la gì ?, devDependencies là gì ?
    *dependencies: Cái này quan trọng đây. Trong project, bạn sẽ phải sử dụng rất nhiều gói, những gói này đã được viết sẵn, chỉ cần require rồi sử dụng, trong này sẽ chứa các package mà để run project.
    *devDependencies: cái này để quản lý các package khi build project.
### Tự tạo file package.json bằng npm init ?
    * npm init rồi cứ enter, trong quá trình press enter có thể viết các trường của nó.
### Cài đặt thư viện bằng npm add dependencies trong file package.json
    * để save package vào package.json ta dùng lệnh : npm install nameOfPackage --save
### Xoá thư viện trong file package.json ?
    * để xóa thư viện trong package.json dùng npm uninstall fileOfPackage
### Chạy lệnh Js trong script, nhận xét sự khác biệt giữa chạy code trong script và ngoài script
    * lệnh Js trong script e chỉ thấy nếu setup và chạy thì nó ngắn hơn thôi.
## Dev tools
### Tìm hiểu node debugger là gì ?
    * node debugger là câu lệnh dùng để kiểm tra quá trình chạy của node, để debugger chúng ta đặt lệnh "debugger;" vào nơi muốn chương trình dừng lại sau đó thực hiện lệnh: node --spect-brk filename.js
    * sẽ có cửa sổ dev tool của brower hiện ra và chúng ta sẽ thực hiện chạy code theo từng bước để biết chương trình hoạt động ra sao.
### Debug một chương trình tính tích một mảng số dương, sử dụng các câu lệnh continue( c ), next( n ), repl( read eval print loop )
    * e chưa hiểu ý của câu hỏi này?
    * ở đây e có tạo 1 chương trình thực hiện như yêu cầu và đặt debugger; vào trong đó.
```
const http =  require("http");
const fs = require('fs');
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req,res)=>{
    function multipleArr(arr){
        let mul=1
        let i;
        function multiple(a,b){
            return a*b;
        }
        for(i=0; i<arr.length; i++){
            debugger;
            mul=multiple(mul, arr[i]);
        }
        
        return mul;
    };
    console.log(multipleArr([1,2,3,4,5,6]));
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("multipleArr([1,2,3,4,5,6])");
    res.end();
}).listen(port, host,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server ${host} đang được khởi chạy ở cổng ${port}`);
})


```
### Phân biệt babel-cli, babel-presets-es2015, babel-presets-stage-2 ?
    * theo như e hiểu thì babel-cli là module được dùng để compile code JS, tức là nó sẽ nhận đầu vào là các file .js và dịch biên dịch nó sang cú pháp tùy vào việc ta thiết lập.
    * babel-presents-es2015 là bản es5, tức là để báo cho babel-cli biết là sẽ dịch cái file .js đó sang ES5.
    * babel-presets-stage-2 là bản es thử nghiệm các tính năng, và tất nhiên nó sẽ chưa được đầy đủ.
### Sử dụng npm để install babel và các presets của babel
    * để cài babel-cli và babel-presets-2015 chúng ta thực hiện:
        npm install --save-dev babel-cli babel-preset-env
### Webpack là gì ?. Ứng dụng của Webpack trong dự án NodeJS
### Sử dụng NPM để cài đặt webpack ?. Cấu hình webpack trong file webpack.config.js.
### Linter là gì ?, Cài đặt ES Lint bằng NPM
    * linter là nói vể các module có khả năng compare code js của mình với các tiêu chuẩn codejs của các nhà phát triển khác mà họ đã viết theo 1 quy chuẩn nhất định, 
### Sử dụng ESLint test coding convention yourfile.js
    * Để sử dụng ESLint chúng ta cần cài module ESLint bằng câu lệnh: yarn add eslint --save-dev, sau đó chạy lệnh yarn eslint filename.js
## Node core
### Để trở thành một webserver thì hệ thống cần đảm bảo những tiêu chí gì ?
    * để trành thành 1 webserver thì hệ thống cấn đảm bảo những tiêu chí sau:
        + 
### Module Pattern là gì ?
    * là chỉ export những thuộc tính và phương thức chung mà chúng ta muốn từ 1 object trả về, việc này sẽ giúp bảo vệ code của module
### Các phương thức require, exports, module.exports dùng để làm gì ?
    * require(): được dùng để lấy những giá trị từ file mà chúng ta đã export.
    * exports và module.exports đều là object, cùng trỏ đến cùng 1 vùng nhớ, nhưng sau khi gán cho exports 1 phương thức hoặc thuộc tính thì nó lại trỏ đến 1 vùng nhớ hoàn toàn khác không liên quan đến module.exports nữa, vì vậy, tốt nhất khi muốn export ta nên dùng module.exports.
### So sánh require ES5 => import Es6, sử dụng Babel để convert từ ES6 về  ES5
    * require thực hiện việc loading synchronous, import thực hiện việc loading asynchronous
    * ruquire thực hiện việc Throws error at runtime, import thực hiển việc Throws error while parsing
### So sánh require/import relative file, library
    * library là thư viện core của NodeJs, vì vậy khi import hay require chúng ta chỉ cần khai báo tên của library đó.
    * còn khi muốn import/require file thì phải chỉ rõ đường dẫn tới file đó.
### Node APIs là gì ?
    * Node APIs là những thư viện đã được thiết kế sẵn, thông qua đó người lập trình có thể tái sử dụng để dùng các thư viện đó trong chương trình của họ 1 cách nhanh chóng và thuận tiện.
### Fs module trong NodeJS dùng để làm gì ?
    * fs module trong NodeJS dùng thể thao tác với file (tất tần tật các thao tác về file bao gồm: đọc, ghi, mở, đóng, copy........);
### Viết  chương trình tạo, viết và đọc file ?
    * chương trình:
```

```
### Sự khác biệt giữa Fs asynchronous và Fs synchronous là gì ?
### Http module trong NodeJS dùng để làm gì ?
### Tạo một server đơn giản lẳng nghe ở cổng 8000, request trả lại "Hello world" sử dụng Http APIs
### Event emitter trong nodejs là gì ?. Kể tên và nêu chức năng của các phương thức trong lớp Event emitter
### Chức năng của Event Loop là gì ?.  Event loop trong nodeJs có giống Event loop trong engine V8 hay không ?
### Trình bày các khái niệm: Event Driven, Non - Blocking trong nodeJS 
### Phân biệt giữa asynchronous và Non - Blocking trong NodeJS ?

