function compose(middlewares) {
  return function (context) {
      function dispatch(i) {
          if (i === middlewares.length) return;
          const middleware = middlewares[i];
          // eslint-disable-next-line no-useless-catch
          try {
              return middleware(context, function next() {
                  return dispatch(i + 1);
              });
          } catch (err) {
              throw err;
          }
      }
      return dispatch(0);
  };
}

// 示例中间件
function addOne(context, next) {
  context.num = context.num + 1;
  console.log('addOne: before next', context.num);
  return next();
  // console.log('addOne: after next', context.num);
  // return result;
}

function checkEven(context, next) {
  console.log('checkEven: before next', context.num);
  if (context.num % 2 === 0) {
      console.log('Exiting due to even number');
      return '这是输出的结果'; // 退出后续中间件执行
  }
  const result = next();
  console.log('checkEven: after next', context.num);
  return result;
}

function double(context, next) {
  context.num = context.num * 2;
  console.log('double: before next', context.num);
  const result = next();
  console.log('double: after next', context.num);
  return result;
}

const middlewares = [addOne, checkEven, double];
const composed = compose(middlewares);

const context = { num: 3 };
console.log(composed(context));
