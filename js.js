onclick="myFunc.toast('I am a toast', 4000)"

$(document).ready(function () {


// var myFunc={
//     'color': 'red',
//     'timer': 2000,
//     'myClass': 'default',
//     'myText': 'My text toast',
//     'toast': function() {
//         var toactDiv = $('#toast-container ');
//         toactDiv.html(this.myText);
//         toactDiv.addClass(this.myClass);
//         toactDiv.css('background', this.color);
//         toactDiv.css('display', 'block');
//         setTimeout(function(){$('#toast-container ').css('display', 'none');}, this.timer);
//     }
// };
//
//     $('.btn').on('click', function (){
//         myFunc.toast();
//     });


    // var out ='';
    var i=0;
    var myFunc={
        // 'out': '',
        'toast': function(color,timer,myClass,myText) {
            // this.out +='<div class="toast">'+myText+'</div>';
            // $('#toast-container ').html(this.out);
            i++; //only for me
            var toactDiv = document.createElement('div');
            toactDiv.className = 'toast id' + i;
            toactDiv.innerHTML = myText + i;
            $("#toast-container").append(toactDiv);
            // $('.toast').slideUp(1000);


            setTimeout(function () {$('.toast').eq(0).remove();}, timer);




            var toact = $('.toast');
            toact.addClass(myClass);
            toact.css('background',color);
            toact.css('display', 'block');

        }
    };

    $('.btn').on('click', function(){myFunc.toast('red',4000,'default','My text toast')});

});