#!/usr/bin/env node

const chalk = require('chalk')

// Faceshot art
const face = [
  '   /////////',
  '  /ʗ/---▭-▭ ',
  '  \\\\\\     ᔨ ',
  '   \\\\\\\\/╰─╯|',
  '  /  \\\\\\/// ',
  ' /  \\    \\  '
]

// Text Strings
const text = [
  {
    style: 'title',
    text: 'James Steinbach'
  },
  {
    style: 'title',
    text: 'Senior Front-End Architect'
  },
  {
    style: 'link',
    text: 'https://jamessteinbach.com'
  },
  {
    style: 'link',
    text: 'https://github.com/jdsteinbach'
  },
  {
    style: 'link',
    text: 'https://twitter.com/jdsteinbach'
  },
  {
    style: 'link',
    text: 'https://linkedin.com/jdsteinbach'
  }
]

// Styles
const s = {
  link: str => chalk.hex('#5C6BC0')(str),
  title: str => chalk.bold.hex('#5C6BC0')(str),
  border: str => chalk.bgHex('#546E7A')(str),
  face: str => chalk.hex('#FB8C00')(str)
}

console.log(chalk.bgHex('#263238')([
  s.border(' ').repeat(60),
  `${s.border('  ')}${' '.repeat(56)}${s.border('  ')}`,
  text
    .map((t, i) => `${s.border('  ')}  ${s.face(face[i]) || ' '.repeat(12)}${' '.repeat(39 - t.text.length)}${s[t.style](t.text)}   ${s.border('  ')}`)
    .join('\n'),
  `${s.border('  ')}${' '.repeat(56)}${s.border('  ')}`,
  s.border(' ').repeat(60)
].join('\n')))
