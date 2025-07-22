import React from 'react'
const NoteComponent = ({note}) => {
  return (
    <div className="text-end mb-1">
        <small> 
          <span className='badge bg-dark'>{note}</span> 
        {/* <i class="fa fa-hand-rock-o text-black fs-6 fw-bold" aria-hidden="true"></i> */}
        </small>
    </div>
  )
}

export default NoteComponent