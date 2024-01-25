export function duplicateData(array) {
  const setDuplicate = new Set()

  const newArray = array.filter(item => {
    const duplicate = setDuplicate.has(item.id)
    setDuplicate.add(item.id)
    return !duplicate
  })

  return newArray
}
