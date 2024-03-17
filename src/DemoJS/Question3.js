// 3. What is the difference between Call, Apply and Bind.
export default function Question3() {

  // Call(). 
  var employee1 = { firstName: 'john', lastName: 'Rodson' };
  var employee2 = { firstName: 'Jimmy', lastName: 'baily' };

  function invite(greeting1, greeting2) {
    console.log(greeting1 + " " + this.firstName + " " + this.lastName + " " + greeting2);
  }

  invite.call(employee1, "hello", "how are you");
  invite.call(employee2, 'hi', 'how have you been');
}