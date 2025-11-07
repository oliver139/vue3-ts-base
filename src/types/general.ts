export type ObjEntries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][]

export type WithPrefix<T extends string> = `${T}${string}`

export const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const
export type typeDayNames = (typeof dayNames)[number]
export const dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const
export type typeDayNamesShort = (typeof dayNamesShort)[number]
export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const
export type typeMonthNames = (typeof monthNames)[number]
export const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const
export type typeMonthNamesShort = (typeof monthNamesShort)[number]
