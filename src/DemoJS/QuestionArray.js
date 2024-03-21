export default function QuestionArray() {
  // Undefine.
  var arrUndefine1;
  console.log('arrUndefine1: ', arrUndefine1);

  var arrUndefine1_2 = undefined;
  console.log('arrUndefine1_2: ', arrUndefine1_2); // arrUndefine1_2[0]=error.

  var arrUndefine2 = [undefined];
  console.log('arrUndefine2: ', arrUndefine2, arrUndefine2[0]);

  // Null.
  var arrNull1 = null;
  console.log('arrNull1: ', arrNull1);// arrNull1[0]=error

  var arrNull2 = [null];
  console.log('arrNull2: ', arrNull2, arrNull2[0]);

  // Empty.
  var arrEmpty1 = [];
  console.log('Empty: ', arrEmpty1, arrEmpty1[0]);

  // Length = 0.
  var arrLengthZero = [];
  console.log('length = 0: ', arrLengthZero, arrLengthZero[0]);

  // Length > 0.
  var arrSmall1 = [1];
  var arrSmall2 = [1, 2];
  var arrSmall3 = [1, 2, 3];
  console.log('arrSmall1: ', arrSmall1, arrSmall1[0]);
  console.log('arrSmall2: ', arrSmall2, arrSmall2[0]);
  console.log('arrSmall3: ', arrSmall3, arrSmall3[0]);
}
