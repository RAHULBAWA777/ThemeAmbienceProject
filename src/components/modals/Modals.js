import React from 'react'
import { useEffect , useState} from 'react'

const Modals = () => {
    
  return (
    <div>
        
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Agree</button>
        {/* <button type="button" class="btn btn-primary">Understood</button> */}
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modals