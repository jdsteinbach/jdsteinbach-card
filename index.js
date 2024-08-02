#!/usr/bin/env node

import chalk from 'chalk'
import colors from './getNordColors.js'

// Faceshot art
const face = [
  '',
  '   /////////',
  '  /ʗ/---▭-▭ ',
  '  \\\\\\     ᔨ ',
  '   \\\\\\\\/╰─╯|',
  '  /  \\\\\\/// ',
  ' /  \\    \\  ',
  ''
]

// Text Strings
const text = [
  {
    style: 'title',
    text: 'James Steinbach'
  },
  {
    style: 'text',
    text: 'Senior Software Engineer'
  },
  {
    style: 'text',
    text: 'Front-End Architect'
  },
  {
    style: 'text',
    text: ''
  },
  {
    style: 'link',
    text: 'https://jdsteinbach.com'
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
    text: 'https://linkedin.com/in/jdsteinbach'
  }
]

// Styles
const s = {
  link: str => chalk.hex(colors.nord15)(str),
  title: str => chalk.bold.hex(colors.nord8)(str),
  text: str => chalk.hex(colors.nord2)(str),
  border: str => chalk.bgHex(colors.nord1)(str),
  face: str => chalk.hex(colors.nord12)(str)
}

console.log(chalk.bgHex(colors.nord0)([
  '',
  s.border(' ').repeat(60),
  `${s.border('  ')}${' '.repeat(56)}${s.border('  ')}`,
  text
    .map((t, i) => `${s.border('  ')}  ${s.face(face[i]) || ' '.repeat(12)}${' '.repeat(39 - t.text.length)}${s[t.style](t.text)}   ${s.border('  ')}`)
    .join('\n'),
  `${s.border('  ')}${' '.repeat(56)}${s.border('  ')}`,
  s.border(' ').repeat(60),
  ''
].join('\n')))
