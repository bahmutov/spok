// @ts-ignore
import utilInspect from 'browser-util-inspect'
import spok from './spok'

// terminal colors won't show properly in the browser
if (spok && spok.color) {
  spok.color = false
}

export default function inspect(obj: any, color: boolean) {
  return utilInspect(obj, false, 5, color)
}
