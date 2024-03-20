export default function Question27() {
  function Welcome(name) {
    console.log("name", name);

    var greetingInfo = function (message) {
      console.log("message", message);

      console.log(message + " " + name);
    };

    return greetingInfo;
  }

  var myFunction = Welcome("John");
  console.log("myFunction", myFunction);

  myFunction("Welcome "); //Output: Welcome John
  console.log('myFunction("Welcome ")--');

  myFunction("Hello Mr."); //output: Hello Mr. John
}
