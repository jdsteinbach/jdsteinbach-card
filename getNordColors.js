import { readFileSync } from 'node:fs'
const nordSass = readFileSync('./node_modules/nord/src/sass/nord.scss', 'utf8')

const colorVariables = nordSass.matchAll(/\$(nord\d+)\:\s+?(\#[a-z0-9]{6};)/gim)

const colors = colorVariables.reduce((acc, [whole_, k, v]) => {
  acc[k] = v
  return acc
}, {})

export default colors
