const expand1 = document.getElementById('expand1');
const expand2 = document.getElementById('expand2');
const expand3 = document.getElementById('expand3');
const expand4 = document.getElementById('expand4');
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
let expandable1 = true;
let expandable2 = true;
let expandable3 = true;
let expandable4 = true;

function expand(id, answer, bool){
    id.onclick = function(){
        if(bool){
            id.firstChild.src = "./assets/images/icon-minus.svg";
            answer.classList.remove("hidden");
            bool = false;
        }
        else{
            id.firstChild.src = "./assets/images/icon-plus.svg";
            answer.classList.add("hidden");
            bool = true;
        }
    }
}

expand(expand1, answer1, expandable1);
expand(expand2, answer2, expandable2);
expand(expand3, answer3, expandable3);
expand(expand4, answer4, expandable4);
