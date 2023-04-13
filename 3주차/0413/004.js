//apply, call, bind


// call
var peter = {
    name: 'Peter Parker',
    sayName: function () {
        console.log(this.name);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName()//Peter Parker
peter.sayName.call(bruce); // Bruce Wayne

///
var peter = {
name : 'Peter Parker',
sayName : function(감탄사){    
        console.log(this.name + 감탄사);
    }
}

var bruce = {
name : 'Bruce Wayne',
}
peter.sayName.call(bruce, '!'); //Bruce Wayne!
peter.sayName()//Peter Parkerundefined
peter.sayName('!') // Peter Parker!

///apply
    var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
        console.log(this.name+ ' is '+ is + ' or ' + is2);
    }
    }

    var bruce = {
    name : 'Bruce Wayne',
    }

    peter.sayName.apply(bruce, ['batman', 'richman']); //배열로 전달
                                  //is     is2
  /* peter.sayName.apply(bruce, ['batman', 'richman']) 의 결과가 무엇이 될지 생각해보고 
  apply 를 call로 바꾸어 호출했을 때와 비교해 봅시다. */

/////call 과 apply비교
// 비교1
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사1, 감탄사2) {
        console.log(this.name + 감탄사1 + 감탄사2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, '!', '!!');

// 비교2
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사1, 감탄사2) {
        console.log(this.name + 감탄사1 + 감탄사2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, ['!', '!!']);



///////////////////
/// bind
function sayName() {
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName: sayName
}

var peter = {
    name: 'peter',
    sayName: sayName.bind(bruce)
}

peter.sayName(); //bruce
bruce.sayName(); //bruce