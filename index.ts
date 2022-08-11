export const promiseAll = <T>(arr: (Promise<T> | T)[]): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    const results = [];
    arr.forEach((p) => {
      Promise.resolve(p).then((r) => {
        results.push(r);
        if (results.length === arr.length) {
          resolve(results);
        }
      });
    });
  });
};

export const getIcecream = (flavour: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    console.log(flavour);
    setTimeout(() => {
      resolve(flavour);
    }, 500);
    if (flavour === 'chocolate') {
      reject(new Error("We don't like that flavour"));
    }
  });
};
