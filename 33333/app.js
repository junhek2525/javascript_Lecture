const reviewList = [
    {
        id: 1,
        name: "ㄴㄱ",
        type: "1",
        img: "./img/OIP.jpg",
        text: "시꺼먼거"

    },
    {
        id: 2,
        name: "기괴",
        type: "2",
        img: "./img/2656E24B5356203310.jpg",
        text: "기기기기기기기ㅣ고기ㅚ고기ㅗ기ㅗ고고고고기ㅗㅗ기ㅗ귀ㅗ고기고괴"

    },
    {
       id: 3,
       name: "하하하하하하하하하하하ㅏㅏ하하하하하하하하하하하하하ㅏ하ㅏㅏ하ㅏㅏ하하ㅏㅏ하ㅏ하ㅏ하ㅏ하ㅏ하ㅏㅏ하ㅏ하하ㅏ하ㅏ하하ㅏ하ㅏ하하ㅏ하ㅏ",
       type: "3",
       img: "./img/28689_56036.jpeg",
       text: ""

    },
    {
       id: 4,
       name: "ㄴㄱ",
       type: "",
       img: "",
        text: ""

    }
]
const mainIng = document.querySelector("#main-img");
const foodName = document.querySelector("#food-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-bnt");

let currentIndex = 1;

window.addEventListener("DOMContentLoaded", function(){
    let item = reviewList[currentIndex];
    mainIng.src = item.img;
    foodName.textContent = item.img;
    type.Content = item.img;
    info.Content = item.img;
});

function showReview(index){
    const item = reviewList[index];
    mainIng.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
}
preBtn.addEventListener("click", function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = reviewList.length -1
    }
    showReview(currentIndex);
})
nextBtn.addEventListener("click", function(){
    currentIndex++;
   if( currentIndex >= reviewList.length){
    currentIndex = 0
   }
})