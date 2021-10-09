import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function BlendEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    // spices: ''
  })
  const { id } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const singleBlend = props.blends.find(blend => blend.id === Number(id))
      setFormData({
        name: singleBlend.name
      })
    }
    if (props.blends.length) {
      prefillFormData()
    }
  }, [props.blends, id])

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
      props.handleBlendEdit(id, formData)
    }}>
      <label>Spice blend name
        <br/>
        <input type='text' name='name' value={formData.name} onChange={handleChange}/>
      </label>
      <br/>
      <button>Save</button>
      <button onClick={()=>props.handleBlendDelete(id)}>Delete</button>
    </form>
  )
}