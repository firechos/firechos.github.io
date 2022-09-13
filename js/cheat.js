var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '不要走吖 w(ﾟДﾟ)w';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '好耶 ヽ(✿ﾟ▽ﾟ)ノ';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });