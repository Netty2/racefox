document.addEventListener('DOMContentLoaded', function(){


    $('.nav_pill_content').hide();
    $('.week').show();
    $('#show_week').addClass('active');

    $('#show_week').click(function(e){
        e.preventDefault();
        $('.nav_pill_content').hide();
        $(this).parent().find('button').removeClass('active');
        $('.week').show();
        $(this).addClass('active');

    })
    $('#show_month').click(function(e){
        e.preventDefault();
        $('.nav_pill_content').hide();
        $(this).parent().find('button').removeClass('active');
        $('.month').show();
        $(this).addClass('active');
    })
    $('#show_year').click(function(e){
        e.preventDefault();
        $('.nav_pill_content').hide();
        $(this).parent().find('button').removeClass('active');
        $('.year').show();
        $(this).addClass('active');
    })

});
