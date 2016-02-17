document.addEventListener("WebComponentsReady", function() {
  var navicon = document.getElementById("navicon");
  var drawerPanel = document.getElementById("drawerPanel");
  navicon.addEventListener("click", function() {
    drawerPanel.togglePanel();
  });
});
