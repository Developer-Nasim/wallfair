(function() {



    let sidebar = document.querySelector('.sidebar')
    let menubtn = document.querySelectorAll('.menu-btn')
    menubtn.forEach(mbtn => {
        mbtn.addEventListener('click', () => {
            sidebar.classList.toggle('active')
        })
    })


    let labels = document.querySelectorAll('.crc-blk')
    labels.forEach(lbl => {
        lbl.addEventListener('click', () => {
            labels.forEach(lbls => {
                lbls.classList.remove('active')
            })
            lbl.classList.add('active')
        })
    })





  $("#range").slider({
      range: "min",
      min: 520125,
      max: 5500000,
      value: 520125,
      slide: function(e, ui) {
      $("#currentVal").html(ui.value);
      }
  }); 


  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;


  if (document.getElementById("days")) {
      
  let fixdate = "Apr 18, 2021 00:00:00",
      countDown = new Date(fixdate).getTime(),
      x = setInterval(function() {    

          let now = new Date().getTime(),
              distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

          //do something later when date is reached
          if (distance < 0) { 
              clearInterval(x);
          }
          //seconds
      }, 0) 

  }

}).call(this);