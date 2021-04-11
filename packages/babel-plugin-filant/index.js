module.exports = function ({ types: t }) {
  const name = t.jsxIdentifier('data-filant')
  return {
    name: 'babel-plugin-filant',
    visitor: {
      JSXOpeningElement({ node }, state) {
        const filename = state.file.opts.filename
        const { line, column } = node.loc.start
        const value = t.stringLiteral(`${filename}:${line}:${column}`)
        node.attributes.push(t.jsxAttribute(name, value))
      },
    },
  }
}
