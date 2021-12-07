const { expect } = require('@jest/globals')
const { getExerciseObj, getSelections, getOperation, getSelectionByName, checkFields, getFragment } = require('./utils')

describe('Exercise 3', () => {
  it('Should have all the fields requested by the exercise',  () => {
    const obj = getExerciseObj('5')

    const query = getOperation(obj)
    const selections = getSelections(query)

    expect(query.operation).toBe('query')
    expect(selections.length).toBe(1)

    const [shipmentQuery] = selections
    const shipmentSelections = getSelections(shipmentQuery)

    expect(shipmentQuery.name.value).toBe('shipment')
    expect(shipmentQuery.arguments[0].name.value).toBe('id')
    expect(shipmentQuery.arguments[0].value.kind).toBe('Variable')
    expect(shipmentQuery.arguments[0].value.name.value).toBe('id')

    expect(shipmentSelections.length).toBe(2)

    checkFields(shipmentSelections, ['id', 'stops'])

    const stopsSelections = getSelectionByName(shipmentSelections, 'stops')

    const [directive] = stopsSelections.directives

    expect(directive.name.value).toBe('include')

    const [argument] = directive.arguments

    expect(argument.name.value).toBe('if')
    expect(argument.value.kind).toBe('Variable')
    expect(argument.value.name.value).toBe('withStops')
  })
})