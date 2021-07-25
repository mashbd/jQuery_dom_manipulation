$(document).ready(function(){
    // $('p.para1').css('color','red');
    // $('p.para1').css({
    //     'color':'red',
    //     'background':'#ccc',
    // });
    //    $('p.para2').addClass('color');
    //    $('p.para2').removeClass('color');
    
       $('#btn1').click(function(){
           $('p.para2').toggleClass('color');
       });
    // $('#mydiv').text('Hello world')
    // $('#mydiv').html('<h3>Hello world</h3>');
    // alert($('#mydiv').text());

    // $('ul').append('<li>append item</li>');
    // $('ul').prepend('<li>prepend item</li>');


    //  $('.para1').appendTo('.para2');
    //  $('.para1').prependTo('.para2');

    //  $('ul').before('<h4>Hello</h4>');
    //  $('ul').after('<h4>Hello world</h4>');
    //  $('ul').empty();
    //  $('ul').detach();
    //  $('a').attr('target','_blank');
    //  alert($('a').attr('href'));
    //  $('a').removeAttr('target','_blank');

    //  $('p').wrap('h1')
    // $('p').wrapAll('h1')
     
    var myArr = ['arshad', 'sarkar', 'hanif'];

    $.each(myArr,function(i, val){
     
        console.log(val);
    });0

})