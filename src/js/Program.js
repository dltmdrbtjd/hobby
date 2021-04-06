const select = document.getElementById("option_select");
const textArea = document.getElementById("textarea");
const optionDate = document.getElementById("option_date");
const optionStatus = document.getElementById("option_status");

select.addEventListener("change", function() {
    if(select.options[1].selected) {
        optionDate.style.display = "flex";
        textArea.style.display = "none";
        optionStatus.style.display = "none";
    } else if(select.options[2].selected) {
        textArea.style.display = "none";
        optionDate.style.display = "none";
        optionStatus.style.display = "block";
    } else {
        textArea.style.display = "block";
        optionDate.style.display = "none";
        optionStatus.style.display = "none";
    }
});