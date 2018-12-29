

$(document).ready(function() {
  //登录控制
  $("#loginSubmit").click(function() {
    requestServer({
      data:$('.am-form').serialize(),
      url:"login/login",
      success:function (msg) {
        console.info("登录返回:"+msg);
        if(success_flag==msg.code){
          console.info("跳转菜单页");
          $(window).attr('location','admin-index.html');
        }else{
          alert(msg.msg);
        }
      }
    });
    });
});


