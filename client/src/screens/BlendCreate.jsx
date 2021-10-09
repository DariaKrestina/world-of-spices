import { useState } from 'react'

export default function BlendCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
    // spices: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      props.handleBlendCreate(formData)
    }}>
      <label>Spice blend name
        <br/>
        <input type='text' name='name' value={formData.name} onChange={handleChange}/>
      </label>
      <br/>
      <button>Save</button>
    </form>
  )
}
