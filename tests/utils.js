const { readFileSync } = require('fs')
const gql = require('graphql-tag')

module.exports = {
  getExerciseObj: (exerciseNumber) => {
    const typeDefs = readFileSync(`./exercises/exercise-${exerciseNumber}.graphql`).toString('utf-8')

    if (!typeDefs) {
      throw new Error('Please add content to the exercise file')
    }

    return gql`${typeDefs}`
  },
  getSelections: (query) => {
    const {
      selectionSet: {
        selections = []
      }
    } = query

    return selections
  },
  getSelectionByName: (selections, name) => {
    return selections.find(sel => sel.name.value === name)
  },
  checkFields: (selections, expectedFields) => {
    expectedFields.forEach((field) => {
      const found = selections.some(sel => sel.name.value === field)

      if (!found) {
        throw new Error(`Field ${field} is missing in the current Operation`)
      }
    })
  },
  getOperation: (query) => query.definitions.find(def => def.kind === 'OperationDefinition'),
  getFragment: (query) => query.definitions.find(def => def.kind === 'FragmentDefinition')
}