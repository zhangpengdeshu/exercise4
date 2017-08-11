var assert = require('assert')
var should = require('should')
var add = require('./index.js')
describe('add',function(){
  it('2+3应该输出5',function(){
    add(2,3).should.equal(5)
  })
});
describe('this', function () {
  it('setTimeout', function (done) {
    var obj = {
      say: function () {
        setTimeout(() => {
          // this 是什么？想想为什么？
          //箭头函数不会修改this的指向 因此这里的this依然指向的是obj
          this.should.equal(obj)
          done()
        }, 0)
      }
    }
    obj.say()
  }) 

  it('global', function () {
    function test() {
      // this 是什么？想想为什么？
      // 单纯的函数调用，this在浏览器中指向window 而在node环境中指向global
      this.should.equal(global)
    }
    test()
  })

  describe('bind', function () {
    /**
     *  call , apply 和 bind 的区别
     *  call,apply和bind 第一个参数都是用来改变函数中this指定的对象
     *  call和apply的区别，当传递多个参数的时候，apply需要数组的方式进行传递，而call不需要
     *  bind bind方法返回的仍是一个函数，后面需要对函数调用才可以
     */
    it('bind undefined', function () {
      var obj = {
        say: function () {
          function _say() {
            // this 是什么？想想为什么？
            this.should.equal(obj)  // 利用bind进行更改,this ==> obj  
          }
          return _say.bind(obj)()  //如果后面不跟（）的话，返回的是一个函数
        }
      }
      obj.say()
    })

    it('bind normal', function () {
      var obj = {}
      obj.say = function () {
        function _say() {
          // this 是什么？想想为什么？ ===> this 指向的是obj
          this.should.equal(obj)
        }
        return _say.bind(obj)()
      }()
      obj.say()
    })
  })
})