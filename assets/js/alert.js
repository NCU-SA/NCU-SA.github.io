$(document).ready(function() {
    $('a').click(function(e) {
      var url = $(this).attr('href');  //檢查是否為外部連結(因為通常都會附上https)
      if (url && url.indexOf('http') === 0 && url.indexOf(window.location.host) === -1) {
        e.preventDefault(); //先不要前往

        //SweetAlert的寫法(使用到jquery)
        swal({
          title: "您即將離開本網站",
          text: "您確定要前往外部連結嗎？",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willRedirect) => {
          if (willRedirect) {
            window.open(url, '_blank');
          }
        });
      }
    });
});