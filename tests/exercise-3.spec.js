const { getExerciseObj, getSelections, getOperation, getSelectionByName, checkFields, getFragment } = require('./utils')

describe('Exercise 3', () => {
  it('Should have all the fields requested by the exercise',  () => {
    const obj = getExerciseObj('3')

    const fragment = getFragment(obj)

    expect(fragment.name.value).toBe('UserFragment')
    expect(fragment.typeCondition.name.value).toBe('User')

    const fragmentSelections = getSelections(fragment)

    checkFields(fragmentSelections, ['id', 'firstName', 'lastName', 'email'])

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

    expect(shipmentSelections.length).toBe(3)

    checkFields(shipmentSelections, ['carrierManager', 'currentCeRep', 'cxRep'])

    const carrierManagerSelections = getSelectionByName(shipmentSelections, 'carrierManager')
    const carrierManagerSelection = getSelections(carrierManagerSelections)

    expect(carrierManagerSelection.length).toBe(1)
    checkFields(carrierManagerSelection, ['UserFragment'])

    const currentCeRepSelections = getSelectionByName(shipmentSelections, 'currentCeRep')
    const currentCeRepSelection = getSelections(currentCeRepSelections)

    expect(currentCeRepSelection.length).toBe(1)
    checkFields(currentCeRepSelection, ['UserFragment'])

    const cxRepSelections = getSelectionByName(shipmentSelections, 'cxRep')
    const cxRepSelection = getSelections(cxRepSelections)

    expect(cxRepSelection.length).toBe(1)
    checkFields(cxRepSelection, ['UserFragment'])
  })
})