
function ThanksPopup() {

  const countDown = (seconds) =>{
    let interval = setInterval(() => {
      document.querySelector('#counter').innerHTML = seconds;
      if(seconds == 0){
       clearInterval(interval);
      }
      seconds--;
    }, 1000);
  }

  countDown(3);

  return (
    <div className="thanks-popup-container w-full h-full absolute z-10 bg-[#fdfaf70]">
      <div className="thanks-popup w-[80%] md:w-[50%] h-[40%] flex justify-center items-center gap-5 flex-col absolute top-[50%] left-[50%] z-10">
        <span>THANKS</span>
        <span>YOUR RESPONSE HAS BEEN RECORDED<br /> <span className="text-[12px]">(In local stroage)</span></span>
        <span>Redirecting to Home Page...</span>
        <span id="counter">3</span>
      </div>
    </div>

  )
}

export default ThanksPopup