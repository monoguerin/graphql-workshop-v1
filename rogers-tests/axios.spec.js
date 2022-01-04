const axios = require('axios')
const gql = require('graphql-tag')
const { getShipmentStatus } = require('../exercises/axios')

const { getSelections, checkFields } = require('./utils')

jest.mock('axios')

describe('Exercise 1', () => {
  it('Should call axios with the proper payload', () => {
    axios.post = jest.fn()

    getShipmentStatus()

    expect(axios.post).toHaveBeenCalled()

    const args = axios.post.mock.calls[0]

    expect(args[0]).toBe('/graphql')
    expect(args[1].query).toBeTruthy()
    expect(args[1].variables).toBeTruthy()
    expect(args[1].variables.id).toBe('123')

    const queryObj = gql`
      ${args[1].query}
    `

    const [query] = queryObj.definitions
    const selections = getSelections(query)

    expect(query.operation).toBe('query')
    expect(query.name.value).toBe('ShipmentState')
    expect(selections.length).toBe(1)

    const [shipmentQuery] = selections
    const shipmentSelections = getSelections(shipmentQuery)

    expect(shipmentQuery.name.value).toBe('shipment')
    expect(shipmentQuery.arguments[0].name.value).toBe('id')
    expect(shipmentQuery.arguments[0].value.kind).toBe('Variable')
    expect(shipmentQuery.arguments[0].value.name.value).toBe('id')

    expect(shipmentSelections.length).toBe(2)

    checkFields(shipmentSelections, ['id', 'state'])
  })
})
