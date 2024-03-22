function sayHello() {
  debugger;
  try {
    var appManager = document.getElementById("applicationManager");
    var appObject = appManager.getOwnerApplication(document);
    console.log(appObject);

    if (appObject === null) {
      // error acquiring the Application object!
    } else {
      appObject.show();
    }
  } catch (e) {
    console.log(e);
    // this is not an HbbTV client, catch the error.
  }
}
