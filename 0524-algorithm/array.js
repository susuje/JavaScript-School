const testArray = [1,2,3,4];
testArray.push(5)
testArray.pop();
//push pop 같은거는 이미존재하는 다른거 안바꾸니까 빅O표기법에서 상수 시간(Constant): O(1) 상수시간

//하지만 unshift는 다른원소들이 인덱스가 밀림. 선형 시간: O(n)

testArray.splice(2,1,6); //다른원소에 영향을줄수도잇고안줄수도있다.  맨끝에추가하면 O(1)~O(n) 멘앞에추가
//같은자리 뺀자리에 어떤값을 넣는것은 ㄱㅊ