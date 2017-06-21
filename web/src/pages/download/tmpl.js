import 'common';

$(".down").click(function () {
    ga('send', 'event', '下载', this.innerText);
});