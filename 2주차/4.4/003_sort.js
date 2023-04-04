const num = [3, 1, 11, 8, 6]
console.log(nums.sort()) //이상하게 나옵니다.  사전식 정렬입니다.




// 실무사용코드
function sort(key){
    if (click){
        click = false
        var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
    }
    else{
        click = true
        var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
    }
}