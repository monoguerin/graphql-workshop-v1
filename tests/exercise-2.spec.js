const { getExerciseObj, getSelections, getSelectionByName, checkFields } = require('./utils')

describe('Exercise 2', () => {
  it('Should have all the fields requested by the exercise',  () => {
    const obj = getExerciseObj('2')

    const [query] = obj.definitions
    const selections = getSelections(query)

    expect(query.operation).toBe('query')
    expect(selections.length).toBe(1)

    const [shipmentQuery] = selections
    const shipmentSelections = getSelections(shipmentQuery)

    expect(shipmentQuery.name.value).toBe('shipment')
    expect(shipmentQuery.arguments[0].name.value).toBe('id')
    expect(shipmentQuery.arguments[0].value.kind).toBe('Variable')
    expect(shipmentQuery.arguments[0].value.name.value).toBe('id')

    expect(shipmentSelections.length).toBe(1)

    checkFields(shipmentSelections, ['state'])

    const stateField = getSelectionByName(shipmentSelections, 'state')

    expect(stateField.alias.value).toBe('status')
  })
})