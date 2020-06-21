
type metric = {
  time: number
  value: number
}

type metricData = {
  [key: string] : metric[]
}

const data: metricData = {};

export { data };