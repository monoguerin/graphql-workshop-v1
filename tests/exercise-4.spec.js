const { getExerciseObj, getSelections, getSelectionByName, checkFields } = require('./utils')

describe('Exercise 4', () => {
  it('Should have all the fields requested by the exercise',  () => {
    const obj = getExerciseObj('4')

    const [query] = obj.definitions
    const selections = getSelections(query)

    expect(query.operation).toBe('mutation')
    expect(selections.length).toBe(1)

    const [noteMutation] = selections
    const mutationSelections = getSelections(noteMutation)

    expect(noteMutation.name.value).toBe('createNote')
    expect(noteMutation.arguments[0].name.value).toBe('input')
    expect(noteMutation.arguments[0].value.kind).toBe('Variable')
    expect(noteMutation.arguments[0].value.name.value).toBe('input')

    expect(mutationSelections.length).toBe(2)

    checkFields(mutationSelections, ['errors', 'note'])

    const errorsSelection = getSelectionByName(mutationSelections, 'errors')
    const errorsSelections = getSelections(errorsSelection)

    expect(errorsSelections.length).toBe(1)

    checkFields(errorsSelections, ['message'])

    const noteSelection = getSelectionByName(mutationSelections, 'note')
    const noteSelections = getSelections(noteSelection)

    expect(noteSelections.length).toBe(1)

    checkFields(noteSelections, ['body'])
  })
})