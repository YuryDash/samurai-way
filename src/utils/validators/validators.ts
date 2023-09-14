export const fieldRequired = (value: string): (undefined | string) => {
  if (!value) {
    return "Field is required"
  }
}

export const maxLengthCreator = (maxLength: number) => (value: string): (undefined | string) => {
  if (value && value.length > maxLength) {
    return `max length is ${maxLength} symbols`;
  }
}
export const maxLength30 = maxLengthCreator(30)