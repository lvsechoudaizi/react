/* eslint-disable */
const classnames = function(clazz) {
  let cls = ''
  if (typeof clazz === 'object') {
    Object.entries(clazz).forEach(([clsName, enable]) => {
      if (enable) {
        cls = cls.concat(` ${clsName}`)
      }
    })
  }

  return cls
}

export {
  classnames
}