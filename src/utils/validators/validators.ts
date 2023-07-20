export const fieldRequired = (value: string): (undefined | string) => {
  if (value) {
    return undefined
  } else {
    return "Field is required"
  }
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if( value.length > maxLength ){
    return `max length is ${maxLength} symbols`
  } else {
    return undefined
  }
}
