const { compilerOptions } = require('./tsconfig.json')

/**
 * @param {{ [key: string]: string }} [aliases] - path aliases
 */
function formatPathAliases(aliases) {
  const entries = Object.entries(aliases)

  const formattedPaths = entries.reduce((paths, entry) => {
    const [alias, [option]] = entry

    const slug = alias.replace(/\/\*/g, '')

    const source = option.replace(/\/\*/g, '')

    paths[slug] = source

    return paths
  }, {})

  return formattedPaths
}

/**
 * @type {{ [key: string]: string }} - path aliases
 */
const pathAliases = formatPathAliases(compilerOptions.paths)

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [['module-resolver', { root: '.', alias: pathAliases }]],
}
