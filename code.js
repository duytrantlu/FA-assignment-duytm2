//Có những cách nào để duyệt các phần tử trong 1 array ? Viết code ví dụ
    var arr=[3,2,5,123,12,31,31,3,123,12,31,3,5,34,45,75,'s'];
    var i=0;
    var length=arr.length;
    //dùng for
        // for(i;i<length;i++){
        //     console.log('phần tử thứ '+i+' của mảng là: '+ arr[i]);
        // }
    //dùng while
        // while(i<length){
        //     console.log('phần tử thứ '+i+' của mảng là: '+ arr[i]);
        //     i++;
        // }
    //dùng do...while
        // do{
        //     console.log('phần tử thứ '+i+' của mảng là: '+ arr[i]);
        //     i++;
        // }while(i<length)
    //dùng forEach
        // arr.forEach(function(item, key){
        //     console.log('phần tử thứ '+key+' của mảng là: '+item);
        // })
//Có những cách nào để duyệt các thuộc tính trong 1 object? Viết code ví dụ
    var o={
        name:'duy',
        age:25,
        add:'liễu giai',
        major:'programing',
        test:'',
    }
        // var x= Object.keys(o).map(function(objKey, index){
        //     var value=o[objKey];
        //     //console.log(objKey +' '+value);
        //     console.log(index+ ' '+ value);
        // })
    // for(var index in o){
    //     var value = o[index];
    //     console.log(value);
    // }
        // Object.keys(o).forEach(function(item,key){
        //     console.log('phần tử thứ '+key+' của obj là: '+item +' và giá trị tương ứng là:' +o[item]);
        // })
    
          

