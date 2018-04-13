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

    
    


