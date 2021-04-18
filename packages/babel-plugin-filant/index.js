module.exports = function ({ types: t }) {
  const name = t.jsxIdentifier('data-filant')
  return {
    name: 'babel-plugin-filant',
    visitor: {
      JSXOpeningElement({ node }, state) {
        const filename = state.file.opts.filename
        const hasAttribute = node.attributes.some(
          attr => attr.type === 'JSXAttribute' && attr.name.name === 'data-filant'
        )

        if (!hasAttribute && filename) {
          const line = node.loc.start.line || 0
          const column = node.loc.start.column || 0
          const value = t.stringLiteral(`${filename}|${line}|${column}`)

          // TODO: Check performance difference between array.push
          node.attributes.unshift(t.jsxAttribute(name, value))
        }
      },
    },
  }
}
