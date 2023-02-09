const util = require('./util/util')

export default function inspect(obj: any, color: boolean) {
  return util.inspect(obj, false, 5, color)
}
