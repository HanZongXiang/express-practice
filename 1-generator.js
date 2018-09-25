function delay (msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 3000);
  })
}

function* gen() {
  yield delay('msg1')
  yield delay('msg2')
}

var iterator = gen();
iterator.next();
iterator.next();