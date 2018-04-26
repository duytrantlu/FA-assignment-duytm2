# 1.1 MVC Pattern
## 1.1.1 Understand MVC Pattern
    * https://www.codecademy.com/articles/mvc   
    * https://softwareengineering.stackexchange.com/questions/127624/what-is-mvc-really
    * MVC là viết tắt của Model – View – Control. Là một mô hình thiết kế hay kiến trúc phần mềm được sử dụng trong kỹ thuật phần mềm, nói một cách đơn giản đó là mô hình phân bổ sourcode thành 3 thành phần chính, mỗi thành phần có một nhiệm vụ riêng biệt và xử lý độc lập với các thành phần khác.
        1. Model
            - Đây là thành phần chứa tất cả các nghiệp vụ logic, phương thức xử lý, truy xuất database, đối tượng mô tả dữ liệu như các hàm, class xử lý.
        2. View
            - View đảm nhận việc hiển thị thông tin trang, tương tác với người dùng, nơi chứa tất cả các đối tượng GUI như images, textbox. Nói dễ hiểu đó là tập hợp các file HTML và các form.
        3. Control 
            - Control có nhiệm vụ điều hướng các yêu cầu từ người dùng và gọi đúng các phương thức xử lý chúng, ví dụ như nhận request từ các form và Url để thao tác trực tiếp với thành phần Model.
## 1.1.2 What is its advantages/disadvantages ?
    * Ưu điểm của MVC : 
        - Các dự án có thể áp dụng ngay mô hình MVC mà không phụ thuộc môi trường, nền tảng xây dựng hay ngôn ngữ lập trình phát triển;
        - Quy hoạch các class/ function vào các thành phần riêng biệt Controller – Model – View, khi đó sẽ dễ dàng xây dựng – phát triển – quản lý – vận hành và bảo trì một dự án, tạo sự rõ ràng, trong sáng trong quá trình phát triển dự án, kiểm soát được các luồng xử lý và tạo ra các thành phần xử lý nghiệp vụ chuyên biệt hóa.
        - Đây là một mô hình chuẩn, nó tối ưu nhất hiện nay so với nhiều mô hình khác và được sử dụng trong nhiều dự án và nhiều lĩnh vực, đặc biệt trong công nghệ sản xuất ứng dụng – phần mềm. Các lập trình viên sử dụng mô hình chuẩn MVC để có thể dễ dàng phân phối và chuyển giao công nghệ.
        - Đây là mô hình đơn giản, xử lý những nghiệp vụ đơn giản, và dễ dàng triển khai với các dự án nhỏ.
    * Nhược điểm của MVC : Yêu cầu về chuyên môn khá cao, có kiến thức vững về các mô hình chuẩn; Khó triển khai với những dự án yêu cầu phức tạp hơn. Hiện nay đang có một khái niệm mô hình mới đó là HMVC đang dần thay thế cho MVC
### 1.1.3 When to use MVC ?
    * Khi chúng ta muốn quản lý projecct 1 cách chuyên nghiệp, để có thể dễ ràng xây dựng - phát triển - quản lý - vận hành và bảo trì 1 project, tạo sự rõ ràng, trong sáng trong quá trình phát triển dự án, kiểm soát được các luồng xử lý vào tạo ra các thành phần xử lý nghiệp vụ chuyên biệt hóa.
# 1.2 ORM
## 1.2.1 Understand ORM and why its important ?
    * https://medium.freecodecamp.org/a-comparison-of-the-top-orms-for-2018-19c4feeaa5f
    * ORM (Object Realational Mapping) là kỹ thuật chuyển đổi dữ liệu giữa các hệ thống khác (không phải là mô hình hướng đối tượng) sang các đối tượng trong ngôn ngữ lập trình hướng đối tượng. Trong trường hợp này chúng ta chuyển dữ liệu từ các dòng dữ liệu trong CSDL quan hệ sang đối tượng.
    * Trong lập trình hướng đối tượng chúng ta tương tác với các thành phần dữ liệu (Model) là các đối tượng trong khi hầu hết các cơ sở dữ liệu đang sử dụng phổ biến hiện nay lại đang là CSDL quan hệ. Mà CSDL quan hệ lưu dữ liệu theo dòng (bản ghi – Record) trong các bảng dữ liệu(table). Do vậy cần một kỹ thuật chuyển đổi giữa hai mô hình này để quá trình lập trình được thuận lợi hơn.
## 1.3 Testing
### 1.3.1 Understand TDD, BDD: 
    * https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/
    * TDD (Test-Driven Development) là việc lập trình viên sẽ viết test trước khi viết code, làm giảm khả năng có bug trong code.
        - Tiến trình TDD được chia làm các bước sau:
            1. bắt đầu bằng việc viết tets.
            2. Chạy test, và đảm bảo lần test này nên fail, nếu không fail đây có thể là bug.
            3. viết 1số lượng code tối thiểu để qua được test.
            4. chạy test để check test mới có qua không
            5. cấu trúc lại mã code của bạn.
            6. lập lại bước 1.
        - TDD thì thường có thể test từ 90=100% code của bạn, dễ bảo trì code và dễ ràng thêm tính năng mới.
    * BDD(Behavior-Driven Development) là sự mở rộng của TDD, thay vì tập trung vào phát triển phần mềm theo hướng kiểm thử, BDD tập trung vào phát triển phần mềm theo hướng hành vi. Dựa vào requirement các kịch bản test (Scenarios) sẽ được viết trước dưới dạng ngôn ngữ tự nhiên và dễ hiểu nhất sau đó mới thực hiện cài đặt source code đễ pass qua tất cả các stories đó.
### 1.3.2 Understand about Unit Test:
    * https://medium.com/@lazlojuly/how-to-get-started-with-unit-testing-part-1-7f490bbf560a
    * https://stackoverflow.com/questions/16860/getting-started-with-unit-testing
    * https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/
    * https://hackernoon.com/a-crash-course-on-testing-with-node-js-6c7428d3da02
    * Unit test là phương pháp testing theo từng đơn vị của code. Mục đích của unit test là đảm bảo mỗi phần trong phần mềm đảm bảo theo đúng yêu cầu đề ra.
### 1.3.3 Understand about Test runner (e.g jest, mocha)
    * Theo định nghĩa, Test runner  là môi trường mà lập trình viên chạy toàn bộ việc kiểm thử trong đó. Môi trường này chứa các thành phần liên quan đến phần mềm, phần cứng, và network đã được cấu hình sẵn để giúp việc thực thi việc kiểm thử. Việc cấu hình phải giúp biến môi trường test thành gần như tương đồng với môi trường thực mà sản phẩm sẽ chạy sau này. Chỉ có như thế thì việc test mới giúp lập trình viên phát hiện ra các lỗi của chương trình.
### 1.3.4 Understand about Test Assertion Framework (e.g chai, jasmine)
    * Assertion libraries là những thư viện giúp lập trình viên xác minh tính đúng đắn của một đoạn code nào đó. Nó đơn giản là giúp bạn viết các phép kiểm tra một cách dễ dàng hơn, sử dụng ngôn ngữ gần với ngôn ngữ nói hơn, thay vì viết hàng nghìn câu lệnh if.
    * Testing Assertion Frameworks dùng để tổ chức và thực thi các phép kiểm tra viết bởi assertion libraries. Mocha và Jasmine là hai lựa chọn phổ biến với lập trình viên JavaScript.
### 1.3.5 Understand about spies, stubs and mocks (e.g sinon) 
    * (https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)
    * Spice được sử dụng để lấy thông tin về các cuộc gọi hàm, bao nhiêu lần mà 1 hàm được gọi, biến truyền vào mỗi lần gọi là gì, giá trị trả về là gì, lỗi ném ra là gì.
    * Stubs cũng giống như spice, ngoại trừ việc rằng chúng thay thế cấc function mục tiêu, chúng cũng có thể chứa các hành vi tủy chỉnh, như là trả về 1 giá trị hay quăng ra ngoại lệ, chúng cũng có thể tự động gọi bất kỳ function callback nào được cung cấp như là tham số.
    * Stubs có các công dụng chung:
        - sử dụng chúng để thay thế các đoạn mã có vấn đề.
        - sử dụng chúng để kích hoạt các đoạn mã mà sẽ ko được kích hoạt, ví dụ như các hàm xử lý lỗi.
        - sử dụng để test code bất đồng bộ dễ ràng ơn.
    * Mocks nên được dùng chủ yếu khi lập trình viên sử dụng stub, nhưng cần xác minh nhiều hành vi cụ thể hơn trến nó.
### 1.3.6 Understand code coverage (e.g nyc)
    * Code coverage là xác định xem có bao nhiêu code đã được test. Nó được tính theo công thức: 
        - Code Coverage = (Number of lines of code exercised)/(Total Number of lines of code) * 100%
### 1.3.7 Understand HTTP mocking (e.g nock)
    * HTTP mocking là việc trước khi gửi 1 request thực tế lên server, lập trình viên có thể tạo 1 máy chủ mô phỏng từng yêu cầu đó và trả về dữ liệu tương ứng, lập trình viên có thể xem các phản hồi tiềm năng mà ko cần đi vào back-end.
    * Nock là 1 thư viện mô phỏng và đoán trước trong Nodejs
    * Nock có thể được sử dụng để test các module các module thực hiện yêu cầu HTTP 1 cách riêng biệt
## 1.4 API Security
### 1.4.1 Understand Authentication vs Authorization 
    * https://blog.restcase.com/restful-api-authentication-basics/
    * Authentication là xác thực của 1 thông tin cần xác thực của 1 connection attempt, quy trình này bao gồm việc gửi thông tin cần xác thực từ client truy cập ở xa tới server dưới dạng 1 văn bản thô hoặc là form mã hóa bỏi 1 cổng xác thực.
    * Authenrication là xác thực 1 cái connect attempt là đã được cho phép, Authenrication sảy ra sau khi Authentication thành công.
## 1.5 API Testing with postman
### 1.5.1 https://www.getpostman.com/docs/v6/postman/scripts/test_scripts
### 1.5.2 https://medium.com/aubergine-solutions/api-testing-using-postman-323670c89f6d
### 1.5.3 https://steelkiwi.com/blog/api-testing-useful-tools-postman-tutorial-and-hints/
## 1.6 Practice
### 1.6.1 Build Node MVC app with mongoose:
    *  Refernce: http://timstermatic.github.io/blog/2013/08/17/a-simple-mvc-framework-with-node-and-express/
    
### 1.6.2 Build a MVC Node App with ORM
    * Reference: https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
### 1.6.3 Write API Testing for Mobile Phone API
### 1.6.4 Secure your Mobile Phone API with Authentication and Authorization
    * https://scotch.io/tutorials/easy-node-authentication-setup-and-local