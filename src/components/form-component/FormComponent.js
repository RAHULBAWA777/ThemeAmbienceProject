import "../form-component/form-component.css"

export default function Form(){

    const handleSubmit= (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={e => {handleSubmit(e)}} className="form">
        <label className="form-header">Register Your Interest</label>
        
        
        {/* <label>Name</label> */}
        <br/>
        <input 
        className="input-box"
        placeholder="Name"
          name='userName' 
          type='text' 
        />
        
        {/* <label>Mobile</label> */}
        <br/>
        
        <input
        className="input-box"
        placeholder="+91   Mobile"
         name='Mobile' 
         type='number'
        />
        
        {/* <label>Email</label> */}
        <br/>
        <input
        className="input-box"
        placeholder="Email"
         name='Email' 
         type='email'
        />
        <br/><br/>
        <input 
          className='submitButton'
          type='submit' 
          value='S U B M I T' 
        />
      </form>)
}