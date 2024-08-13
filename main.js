$(function() {
    // 年齢計算の関数
    function calculateAge(birthDate) {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const birthMonthDay = new Date(today.getFullYear(), birthDateObj.getMonth(), birthDateObj.getDate());

        if (today < birthMonthDay) {
            age--; // まだ誕生日が来ていない場合、年齢を1減らす
        }
        return age;
    }

    // ページ読み込み時に年齢を設定
    const age = calculateAge('1986-11-06');
    $('#age').text(age + "歳");
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$(document).ready(function() {
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        if($('#bs-example-navbar-collapse-1').hasClass('in')) {
            $('#bs-example-navbar-collapse-1').removeClass('in');
        }
    });
});