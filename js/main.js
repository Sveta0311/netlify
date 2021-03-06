$(function() {
    $('.load-more').on('click', function() {
        const btn = $(this);
        const loader = btn.find('span');
        $.ajax({
            url: '/data.html',
            type: 'GET',
            beforeSend: function() {
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success: function(responce) {
                setTimeout(function() {
                    loader.removeClass('d-inline-block');
                    btn.attr('disabled', false);
                    console.log(responce);
                }, 1000);
            },
            error: function() {
                alert('Error!');
                loader.removeClass('d-inline-block');
                btn.attr('disabled', false);
            }
        });
    });
});
$("body").on("mouseover", "video", function() {
    this.play();
    $(this).css("background-color", "black");
});
$("body").on("mouseleave", "video", function() {
    this.pause();
})