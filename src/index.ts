// A new way to define objects in typescript
type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

let employee: Employee = {
  id: 5,
  name: 'Kennedy Muendo',
  retire: (date: Date) => console.log(date)
}