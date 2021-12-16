const express = require("express");
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { readFileSync } = require("fs");

// we must convert the file Buffer to a UTF-8 string
const typeDefs = readFileSync("./src/schema.graphql").toString("utf-8");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(typeDefs);

const NOTES = [
  {
    body: 'this is a note',
    callBackAt: '2021-10-01T14:07:03-04:00',
    calledBackAt: '2021-10-01T14:07:03-04:00',
    createdAt: '2021-10-01T14:07:03-04:00',
    createdBy: {
      cellPhone: '7203009808',
      email: 'john.smith@workshop.com',
      firstName: 'Dom',
      fullName: 'Dom Toretto',
      id: '6',
      lastName: 'Dom',
      parentUserId: '001',
      phone: '2487968',
      phoneExt: '123',
    },
    createdById: 22,
    id: '222',
    updatedAt: '2021-10-01T14:07:03-04:00',
  }
]

// The root provides a resolver function for each API endpoint
const root = {
  shipment(args) {
    return {
      id: args.id,
      activeCxTasks: [
        {
          assignedAt: '2021-10-01T14:07:03-04:00',
          assignedTo: {
            cellPhone: '7203009808',
            email: 'john.smith@workshop.com',
            firstName: 'John',
            fullName: 'John Smith',
            id: '1',
            lastName: 'Smith',
            parentUserId: '001',
            phone: '2487968',
            phoneExt: '123',
          },
          canceledAt: '2021-10-01T14:07:03-04:00',
          completedAt: '2021-10-01T14:07:03-04:00',
          completedBy: {
            cellPhone: '3013334589',
            email: 'jack.sparrow@workshop.com',
            firstName: 'Jack',
            fullName: 'Jack Sparrow',
            id: '2',
            lastName: 'Sparrow',
            parentUserId: '002',
            phone: '3457753',
            phoneExt: '2',
          },
          dueAt: '2021-10-01T14:07:03-04:00',
          expiresAt: '2021-10-01T14:07:03-04:00',
          id: '5',
          name: 'My task',
          taskable: {
            'id': '2280621',
            'commodity': 'dry goods',
            'lateReason': null,
            'project44Eta': '2021-10-01T14:07:03-04:00',
            'manualEta': '2021-10-01T15:00:00-04:00',
            'arrivedAt': '2021-10-01T13:07:45-04:00',
            'leftAt': '2021-10-01T15:00:00-04:00',
            'stopSequence': 1,
            'stopType': 'pickup',
            'appointment': {
              'id': '2907960',
              'timezone': 'America/New_York',
              'startAt': '2021-10-01T15:00:00-04:00',
              'endAt': null,
              'appointmentType': 'appointment',
              '__typename': 'ShipmentStopAppointment'
            },
            '__typename': 'ShipmentStop'
          },
          taskableId: '89',
          taskableType: 'ShipmentStop'
        }
      ],
      bolReferences: ['123', '456'],
      calculatedMiles: 1234,
      carrierApplicationId: '10023',
      carrierCancelationFee: 200.2,
      carrierManager: {
        cellPhone: '7203009808',
        email: 'shrek@workshop.com',
        firstName: 'Shrek',
        fullName: 'Shrek',
        id: '300',
        lastName: '',
        parentUserId: '001',
        phone: '2487968',
        phoneExt: '123',
      },
      carrierPerMileFuelRate: 123,
      carrierRate: 4000,
      carrierSpecialInstructions: 'Please let me sleep',
      carrierTotalRate: 4444,
      characteristics: {
        backhaulEligible: true,
        bounceCount: 2,
        hasDropTrailerStops: false,
        hazmat: false,
        hot: true,
        mustGo: true,
        rolloverCount: 2,
        sameDaySpot: false,
      },
      currentCeRep: {
        cellPhone: '7203009808',
        email: 'john.CE@workshop.com',
        firstName: 'John',
        fullName: 'John CE',
        id: '400',
        lastName: 'CE',
        parentUserId: '001',
        phone: '2487968',
        phoneExt: '123',
      },
      cxRep: {
        cellPhone: '7203009808',
        email: 'john.CX@workshop.com',
        firstName: 'John',
        fullName: 'John CX',
        id: '500',
        lastName: 'CX',
        parentUserId: '001',
        phone: '2487968',
        phoneExt: '123',
      },
      cxTasks: [
        {
          assignedAt: '2021-10-01T14:07:03-04:00',
          assignedTo: {
            cellPhone: '7203009808',
            email: 'john.CX@workshop.com',
            firstName: 'John',
            fullName: 'John CX',
            id: '500',
            lastName: 'CX',
            parentUserId: '001',
            phone: '2487968',
            phoneExt: '123',
          },
          canceledAt: '2021-10-01T14:07:03-04:00',
          completedAt: '2021-10-01T14:07:03-04:00',
          completedBy: {
            cellPhone: '7203009808',
            email: 'john.CX@workshop.com',
            firstName: 'John',
            fullName: 'John CX',
            id: '500',
            lastName: 'CX',
            parentUserId: '001',
            phone: '2487968',
            phoneExt: '123',
          },
          dueAt: '2021-10-01T14:07:03-04:00',
          expiresAt: '2021-10-01T14:07:03-04:00',
          id: '44444',
          name: 'tasky',
          taskable: {
            id: '12333',
            '__typename': 'Shipment'
          },
          taskableId: '3333',
          taskableType: 'Shipment'
        }
      ],
      equipmentId: 123,
      hasClaims: false,
      isBackhaul: true,
      isTonu: false,
      issueSuggestedOwners: [],
      latestListPrice: null,
      notes: NOTES,
      poReferences: ['1233333'],
      shipmentIssueIds: ['333'],
      shipperCancelationFee: null,
      shipperInsuranceRequirement: {
        automotiveRequirements: ['333333'],
        cargoCoverageRequirements: ['333333'],
        shipmentSpecificRequirements: ['333333'],
      },
      shipperMiles: null,
      shipperPerMileFuelRate: null,
      shipperRate: 30000,
      shipperRateType: null,
      shipperTotalRate: null,
      shipperTrackingSegment: null,
      specialInstruction: null,
      state: 'completed',
      statusDetails: {
        detailedState: 'good',
        pickupStatus: 'Nice'
      },
      stops: [
        {
          'id': '2280621',
          'commodity': 'dry goods',
          'lateReason': null,
          'project44Eta': '2021-10-01T14:07:03-04:00',
          'manualEta': '2021-10-01T15:00:00-04:00',
          'arrivedAt': '2021-10-01T13:07:45-04:00',
          'leftAt': '2021-10-01T15:00:00-04:00',
          'stopSequence': 1,
          'stopType': 'pickup',
          'appointment': {
            'id': '2907960',
            'timezone': 'America/New_York',
            'startAt': '2021-10-01T15:00:00-04:00',
            'endAt': null,
            'appointmentType': 'appointment',
            '__typename': 'ShipmentStopAppointment'
          },
          '__typename': 'ShipmentStop'
        },
        {
          'id': '2280622',
          'commodity': 'dry goods',
          'lateReason': null,
          'project44Eta': '2021-10-02T04:46:05-04:00',
          'manualEta': null,
          'arrivedAt': '2021-10-02T04:26:30-04:00',
          'leftAt': '2021-10-02T06:30:00-04:00',
          'stopSequence': 1,
          'stopType': 'delivery',
          'appointment': {
            'id': '2912054',
            'timezone': 'America/New_York',
            'startAt': '2021-10-02T05:00:00-04:00',
            'endAt': null,
            'appointmentType': 'appointment',
            '__typename': 'ShipmentStopAppointment'
          },
          '__typename': 'ShipmentStop'
        }
      ],
      team: false,
      totalPalletCount: 2,
      totalWeight: 1000,
      trackingOverview: {
        calculatedTrackingMethod: 'eld',
        carrierApplicationId: '12344',
        dispatcher: {
          cellPhone: '7203009808',
          email: 'john.smith@workshop.com',
          firstName: 'Dom',
          fullName: 'Dom Toretto',
          id: '6',
          lastName: 'Dom',
          parentUserId: '001',
          phone: '2487968',
          phoneExt: '123',
        },
        driver: {
          cellPhone: '7203009808',
          email: 'vin.diesel@workshop.com',
          firstName: 'Vin',
          fullName: 'Vin Diesel',
          id: '4',
          lastName: 'Diesel',
          parentUserId: '001',
          phone: '2487968',
          phoneExt: '123',
        },
        trackingCapabilities: {
          keepTruckin: true,
          mobile: false,
          project44: false,
        },
        trackingRequirement: 'Please leave it at the door',
        trackingState: 'was_tracking'
      },
      trailerNumber: '444',
      trailerNumberRequired: false,
      truckNumber: '93',
      truckNumberRequired: true,
      vin: '999',
    }
  },
  createNote(args) {
    NOTES.push({
      body: args.input.body,
      callBackAt: '2021-10-01T14:07:03-04:00',
      calledBackAt: '2021-10-01T14:07:03-04:00',
      createdAt: '2021-10-01T14:07:03-04:00',
      createdBy: {
        cellPhone: '7203009808',
        email: 'john.smith@workshop.com',
        firstName: 'Dom',
        fullName: 'Dom Toretto',
        id: '6',
        lastName: 'Dom',
        parentUserId: '001',
        phone: '2487968',
        phoneExt: '123',
      },
      createdById: 22,
      id: '222',
      updatedAt: '2021-10-01T14:07:03-04:00',
    })

    return {
      errors: [],
      note: NOTES[NOTES.length - 1]
    }
  }
};

var app = express();
const config = require('./rogers/webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(8080);
console.log("Running a GraphQL API server at http://localhost:8080");
