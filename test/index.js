function add (a,b){
    return a+b
}

module.exports = add


var obj1 = {
    name: 'xiaopang',
    age: 24,
    sayName: function(){
        console.log('我是'+ this.name + '我' + this.age);
    }
}

obj1.sayName()

var obj2 = {
    name: 'xiami',
    age: 30
}

obj1.sayName.apply(obj2)

obj1.sayName.call(obj2)

obj1.sayName.bind(obj2)()


var obj3 = {
    say: function () {
        function _say() {
            // this 是什么？想想为什么？
           console.log(this);
        }
        return _say.bind(obj3)()  // call,bind,apply 
    }
}
obj3.say()


var obj4 = {}
obj4.say = function () {
    function _say() {
        // this 是什么？想想为什么？
        console.log(this)
    }
    return _say.bind(obj4)()
}()
//obj4.say()
