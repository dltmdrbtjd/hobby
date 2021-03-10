const infoSavebtn = document.querySelector(".info-save");
const infoSave = document.getElementById("info-save-btn");
const infoSaveYes = document.querySelector(".info-save-yes");
const infoSaveNo = document.querySelector(".info-save-no");

infoSavebtn.addEventListener("click", function(){
    infoSave.style.display = 'block';
});

infoSaveYes.addEventListener("click", function(){
    infoSave.style.display = 'none';
})

infoSaveNo.addEventListener("click", function(){
    infoSave.style.display = 'none';
})