const container = document.querySelector('#root');

//데이터를가져올 api주소 꼭 대문자로씁시다
const NEWSLIST_URL = 'https://api.hnpwa.com/v0/news/1.json'; 
//뉴스들의 리스트. 각 뉴스의 title과 id를 가지고있다.
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/$id.json'; 
// https://api.hnpwa.com/v0/item/13831370.json 여기서 138어쩌구 숫자는 뉴스하나당 id임.
//즉, 뉴스 하나를 가져옴.


//현재 사용자가 보고있는 페이지의 정보와 화면에 보여질 아이템의 갯수를 저장하는 객체입니다.
//초기값은 지금페이지인 1, 페이지당 10개
const store = {
    currentPage: 1,
    datasPerPage: 10
}





//api 데이터받아오는함수
async function getData(url){
    try {
        const response = await fetch(url);
        //console.log(response); //프로미스가 pending으로뜹니다. 데이터는다받아옴.근데 콘솔로찍은이때는 펜딩상태.
        //fetch는 비동기임. fetch에서 데이터를다받을때까지 기다려야함 그래서 async await를 써줘야한다.
        
    if(!response.ok){ //제대로안들어온경우임.
        throw new Error('네트워크에 문제가 있습니다.');
    }
    ////🌟fetch는 promise를 반환한다🌟프로미스의 데이터타입은 Response object.
    //json 에서 자바스크립트객체로 파싱해야합니다.
    return response.json(); 
    } catch(error){ //trhow 에러를 인자로 받아와서 콘솔에 찍어와요!
        console.log(error);
    }
    
}

//api받아온 데이터를 저장함  , 첫페이지를만들고있어요.
async function newsFeed(){
    const newsFeed = await getData(NEWSLIST_URL); //getData 앞에  await 쓴이유가 getData함수자체가 async라서 
    //console.log(newsFeed) 해보면 우리가필요한건 title와 comments_count
    const totalPages= Math.ceil(newsFeed.length / store.datasPerPage) //newsFeed.length 는 배열 안 원소의개수
    //만약 33개면 3.3 나오므로 4페이지가 나와야해서 ceil해줌
    const newsList = [];

    newsList.push('<ul>');
                                    // <a href="#">하면주소창에 #이 붙어요
    for (let i = (store.currentPage-1) *  store.datasPerPage; i< store.currentPage * store.datasPerPage ;i++) {  //첫번째페이지는 0번째부터9번째까지의데이터, 다음목록을보고싶으면(2p) 10번째부터 다시뽑아와야힘. 즉 i가 10
        //store.currentPage-1 // 0번째부터 보여주져
        newsList.push(`
            <li>
                <a href="#/detail/${newsFeed[i].id}">${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
            </li>
        `);
    }
    newsList.push('</ul>');

    //pageNation만들기 

    let pageList = '';
    //totalPages : 우리가가져오는 데이터가 만약 30개다? 한페이지에보여줄건 10개, 즉3개
    for(let i=0; i < totalPages; i++){
        pageList = pageList + `<li><a href="#/page/${i+1}">${i+1}</a></li>`;
    }
    newsList.push( //pageNation은 nav로 보통표현함.
        `<nav>
            <ul>
                ${pageList}
            </ul>
        </nav>`
    );

    //console.log(newsList.join('')) //조인해주면 코드처럼만들어줌
    container.innerHTML = newsList.join('');
    //핸폰사진참고
}

// function newsFeed(){
//     const newsFeed =  getData(NEWSLIST_URL);
//     console.log(newsFeed); // 이 프로미스도 펜딩상태임 그래서 getData앞에도 await를 써줘야함 
//                                getData 함수가 비동기이므루 또 기다려야하기때문에  await 를 getData(NEWSLIST_URL); 앞에 붙인다 
// }
//newsFeed();  // 이렇게하면 위에결과 콘솔로그찍어보면 ^



///뉴스 디테일 페이지 구성 함수
//id 정보를 뽑아온다. / 앵커를누르면 이 newsDetail이 실행되어야한다.
async function newsDetail(){ //location 현재 url에 떠잇는 정보를 알수있다. hash는 #/detail/${newsFeed[i].id}을 가져온다 우리가필요한건 ${newsFeed[i].id} 숫자뿐.
    const id = location.hash.substring(9); //우리가클릭한 앵커의 id만 반환한다.
    const newsContent = await getData(CONTENT_URL.replace('$id',id)); //'CONTENT_URL 은https://api.hnpwa.com/v0/item/$id.json'임  $id 위에id로 바꿔줍시다

    //우리가목록을눌렀을때 반환되는것
    container.innerHTML = `
        <h1>${newsContent.title}</h1>
        <div><a href="#/page/${store.currentPage}">목록으로 돌아가기</a></div> 
    `

    //console.log(newsContent) 첫번째 목록을누르면 url의 id가 변경됨. 
    //
}



//라우터: 화면을 중계하는 함수. url을 쳐다보고있음  #뒤에잇는데이터를알아야한다. ///페이지처리도해줌.
function router(){
    const routePath = location.hash;
    
    //''이면 hash값이 없음. 즉 초기화면
    if(routePath === ''){
        newsFeed();  //기본화면으로 
                                  //
    }else if(routePath.indexOf('#/page/')>=0){  //indexOf('#/page/')>=0 //indexOf문자열 //몇번째인뎃스부터 #/page/가존재하는지   //routePath.includes("#/page/") 도가능.
        store.currentPage = parseInt(routePath.substring(7)) //substring은 문자열이기때문에 parseInt해주기
        //console.log(store.currentPage) //페이지1누르면 1뜸
        newsFeed(); //2페이지누르면 for문에따라 2페이지가 그려진다. 

    } else {
        newsDetail(); 
    }
}
//#뒤에잇는데이터들을 fragment identifier라고한다. 
window.addEventListener('hashchange',router);

router();