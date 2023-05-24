class UltraArray {
    constructor(){
        this.data= {};
        this.length=0;
    }
    push(item){
        //obj.1 = 'hi' 이런식으루 못함 .1을 소수점으로 인식해서
        //obj[0] 이러케
        this.data[this.length] = item; //{0:item} // {0:item,1:item,2:item}  유사배열객체
        this.length +=1; //++
        //push하면 보통배열의 length값 반환하므로 우리도 반환하자.
        return this.length
    }
    pop(){
        const lastState = this.data[this.length-1]
        delete this.data[this.length-1];
        this.length -=1; //--
        return lastState
    }

    //인덱스 숫자로 속성을 제거합니다
    deleteWithIndex(index){
        const removedItem = this.data[index]
        delete this.data[index]
        changeOrderOfItems(index);
        return removedItem
    }
    //인덱스를 정리하고 속성을 제거한다
    changeOrderOfItems(index){
        this.data[index+1] = this.data[index]
        delete this.data[index]
    }
}

const myArray = new UltraArray();

myArray.push(1);
myArray.push(2);