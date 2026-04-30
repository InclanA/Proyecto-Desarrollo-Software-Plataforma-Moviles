export function CPU({ cpu }) {
  return <p>{cpu}</p>
}

export function GPU({ gpu }) {
  return <p> {gpu}</p>
}

export function RAM({ ram }) {
  return <p> {ram} GB</p>
}

export function Disco({ disco }) {
  return <p> {disco} TB</p>
}