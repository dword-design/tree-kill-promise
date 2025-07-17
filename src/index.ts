import kill from 'tree-kill';

export default (...args: [number] | [number, string | number]) =>
  new Promise<void>((resolve, reject) => {
    const callback = (error?: Error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    };

    if (args.length === 1) {
      kill(args[0], callback);
    } else {
      kill(args[0], args[1], callback);
    }
  });
