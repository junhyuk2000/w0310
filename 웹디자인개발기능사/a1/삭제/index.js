$(document).ready(()=>{
    $('li:first-of-type').click(()=>{
        $('.modal').show();
    });
    $('.modal a').click(()=>{
        $('.modal').hide();
    })
})