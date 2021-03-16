(function () {
  window.serverURI = "";
  window.onresize = onresize;
  window.onbeforeunload = () => "정말 나갈꺼에요?";

  function onresize(event) {
    const body = document.getElementById("body");
    body.scrollTop = body.scrollHeight;
    const conversationBox = document.getElementById("conversation-box");
    conversationBox.scrollTop = conversationBox.scrollHeight;
  }

  getOnlineCount();
  setInterval(getOnlineCount, 5000);
  function getOnlineCount() {
    $.getJSON(window.serverURI, function (info) {
      $(".online-count>strong").text(info.usersOnline);
    });
  }
})();
