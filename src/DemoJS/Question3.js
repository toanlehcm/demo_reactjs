/** 3. What is the difference between Call, Apply and Bind.
 * https://www.w3schools.com/js/js_function_call.asp
 * https://www.w3schools.com/js/js_function_apply.asp
 * https://www.w3schools.com/js/js_function_bind.asp
 * */

export default function Question3() {

  var employee1 = { firstName: 'john', lastName: 'Rodson' };
  var employee2 = { firstName: 'Jimmy', lastName: 'baily' };

  function invite(greeting1, greeting2) {
    console.log(this.firstName + " " + this.lastName + ", " + greeting1 + " " + greeting2);
  }

  // Call(). 
  invite.call(employee1, "hello", "how are you");
  invite.call(employee2, 'hi', 'how have you been');

  // Apply().
  invite.apply(employee1, ["try", "learning"]);
  invite.apply(employee2, ["practice", "studying"]);

  // Bind().
  var inviteEmployee1 = invite.bind(employee1);
  var inviteEmployee2 = invite.bind(employee2);

  inviteEmployee1('never', 'give up');
  inviteEmployee2('try', 'hard');
}