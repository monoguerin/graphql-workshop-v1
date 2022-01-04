import React, { useState } from 'react'

const ShipmentNotes = () => {
  const [body, setBody] = useState('')
  const submitNote = () => {
    setBody('')
  }
  // const NOTABLE_TYPE = 'Shipment'
  // const NOTABLE_ID = '123'

  return (
    <div>
      <div>
        <p>Create a New Note</p>
        <label htmlFor='body'>
          Note Body:
          <input
            id='body'
            type='text'
            name='name'
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </label>
        <button onClick={submitNote}>Create a new Note</button>
      </div>
      <h1>Notes:</h1>
      {/* Implement the notes */}
    </div>
  )
}

export default ShipmentNotes
