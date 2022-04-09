// console.log("hello")
const wrapper=document.querySelector(".wrapper"),
qrInput=wrapper.querySelector(".form input"),
genrateBtn=wrapper.querySelector(".form button"),
QrImg=wrapper.querySelector(".qr-code img");
genrateBtn.addEventListener("click",()=>{
    let qrVal=qrInput.value;
    // console.log(qrVal);
    if(!qrVal) return;
    genrateBtn.innerText="Genrating...";
    QrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrVal}`;
    //first load the image then add the active class
    QrImg.addEventListener("load",()=>{

        wrapper.classList.add("active");
         genrateBtn.innerText="Click to genrate Qr code";
    });
});

qrInput.addEventListener("keyup",()=>{
    if (!qrInput.value) {
         
        wrapper.classList.remove("active");
    }
});