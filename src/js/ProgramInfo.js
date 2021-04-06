
const programInfo = document.getElementById("Program_info");
const programInfoContents = document.getElementById("Program_info_contents");
const programInfoBtn = document.getElementById("Program_info_btn");

programInfo.addEventListener("click", function() {
    if(programInfoContents.style.display = "none") {
        programInfoContents.style.display = "block";
        programInfoBtn.innerText = "상세내용 닫기 ▲";
    } else {
        programInfoContents.style.display = "none";
        programInfoBtn.innerText = "상세내용 펼펴보기 ▼";
    }
});
