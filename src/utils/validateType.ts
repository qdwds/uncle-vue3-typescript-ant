//  校样formdata
export const isFormData = (value: any): boolean =>
    Object.prototype.toString.call(value) === "[object FormData]"