import kill from 'tree-kill'

export default (...args) => new Promise(resolve => kill(...args, resolve))
