const { getExerciseObj, getSelections, getSelectionByName, checkFields } = require('./utils')

describe('Exercise 1', () => {
  it('Should have all the fields requested by the exercise',  () => {
    const obj = getExerciseObj('1')

    const [query] = obj.definitions
    const selections = getSelections(query)

    expect(query.operation).toBe('query')
    expect(selections.length).toBe(1)

    const [shipmentQuery] = selections
    const shipmentSelections = getSelections(shipmentQuery)

    expect(shipmentQuery.name.value).toBe('shipment')
    expect(shipmentQuery.arguments[0].name.value).toBe('id')
    expect(shipmentQuery.arguments[0].value.value).toBe('123')

    expect(shipmentSelections.length).toBe(5)

    checkFields(shipmentSelections, ['id', 'state', 'truckNumber', 'shipperRate', 'stops'])

    const stopsSelection = getSelectionByName(shipmentSelections, 'stops')
    const stopsSelections = getSelections(stopsSelection)

    expect(stopsSelections.length).toBe(1)

    checkFields(stopsSelections, ['id'])
  })
})
