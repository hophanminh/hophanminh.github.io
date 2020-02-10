$(document).ready(function(){
    setTimeout(function(){
        enterWebsite();
        $('body').delay(350).css({
            'overflow': visible
        })
    },600);
})

function enterWebsite(){
    $('.content').hide();
    Swal.fire({
        title: 'Sweet!',
        text: 'Mình hỏi cậu cái này nhaa, được không?',
        imageUrl: '../img/meo.jpg',
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: 'Custom image',
      }).then(function(){
          $('.content').show(500);
      })
}

function switchButton(){

    var audio = new Audio ('../sound/wrong.swf.mp3');
    audio.play();
    var topY = $('#yesAnswer').css("top");
    var leftY = $('#yesAnswer').css("left");
    var topN = $('#noAnswer').css("top");
    var leftN = $('#noAnswer').css("left");

    $('#noAnswer').css('left', leftY);
    $('#noAnswer').css('top', topY);
    $('#yesAnswer').css('left', leftN);
    $('#yesAnswer').css('top', topN);
}

function moveButton(){
    var audio = new Audio ('../sound/quack.mp3');
    audio.play();
    if(screen.width <= 600){
        var x = Math.floor(Math.random()*300);
        var y = Math.floor(Math.random()*500);
    } 
    else {
        var x = Math.floor(Math.random()*500);
        var y = Math.floor(Math.random()*500);
    }

    var left = x + 'px';
    var top = y + 'px';

    $('#noAnswer').css("left", left);
    $('#noAnswer').css("top", top);

}

var n = 0;
$('#noAnswer').mousemove(function(){
    if(n < 1)
        switchButton();
    if( n >= 1) 
        moveButton();
    n++;
})

$('#noAnswer').click(()=>{
    if(screen.width>=900)
        moveButton();
})

$('#yesAnswer').click(function(){
    $('#bg').css("background-image",'url("../img/puuung-love-is-16.jpg")');
    Swal.fire({
        title: 'Sao thích tớ nè :>',
        html: true,
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `,
        html: "<input type='text' class = 'form-control' placeholder='Dễ thươngg'/>",
        showCancelButton: true,
        cancelButtonText: 'Hoy, ngại',
        confirmButtonText: 'Nèeee',
        confirmButtonColor: "green",
        cancelButtonColor: "red",
      }).then(result=>{
          if(result.value){
            Swal.fire({
                title: 'Làm người yêu tớ nào',
                text: 'Iu cậu 3000',
                confirmButtonText: '<3. Inb mình nha',
                onClose: ()=>{
                    window.location = 'http://fb.com/phanminh.ho';

                }
            })
          }
          else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            Swal.fire({
              title: 'Hong sao, cậu biết mình thích cậu là được',
              text: 'Iu cậu 3000. Inb mình nha',
              confirmButtonText: '<3',
              onClose: ()=>{
                window.location = 'http://fb.com/phanminh.ho';
            }
            })
          }
      })
})