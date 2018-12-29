
//基本路径-服务端
var baseUrl = 'http://localhost:8008/home-webapp/';

/*
*请求json数据到服务器
 */
function requestJsonServer(jsonData, url) {
  $.ajax({
    type: "POST",
    url: baseUrl+url,
    data: jsonData,
    dataType: "json",
    function (data) {
      return data;
    }
  });
}
  /*
  *请求form数据到服务器
   */
  function requestServer(ops) {
    console.info("进入请求");
    var url=baseUrl+ops.url;
   console.info("url:"+url);
    console.info("data:"+ops.data);
    $.ajax({
      type: 'POST',
      url: url,
      data: ops.data,
      dataType: "json",
      jsonp: "callback",
      async: false,
      success:function (data) {
        console.info("return：" + data);
        ops.success(data);
      }
    });
  }
  /*
*请求json数据到服务器 md5
 */
  function requestJsonServerMd5(jsonData, url) {
    getJson({
      url: url,
      data: jsonData,
      success: function (msg) {
        return msg;
      }
    });
  }



