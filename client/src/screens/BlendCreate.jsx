import { useState } from "react";
import './BlendCreate.css'

export default function BlendCreate(props) {
  const { spices } = props;
  const [formData, setFormData] = useState({
    name: "",
    spices: [
      {
        id: "",
        name: "",
      },
      {
        id: "",
        name: "",
      },
      {
        id: "",
        name: "",
      },
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (e, index) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      spices: prevState.spices.map((s, i) => {
        return i === index ? spices.find((sp) => sp.id === Number(value)) : s;
      }),
    }));
  };

  return (
    <form className="blend-create"
      onSubmit={(e) => {
        e.preventDefault();
        props.handleBlendCreate(formData);
      }}
    >
      <label>
        Spice blend name
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      {formData.spices.map((_spiceInput, index) => (
        <div className="blend-create-single-dropdown" key={`select${index}`}>
          <select
            onChange={(e) => handleSelectChange(e, index)}
            defaultValue="default"
          >
            <option disabled value="default">
               Select a Spice  
            </option>
            {spices.map((spice) => (
              <option key={`${index}${spice.id}`} value={spice.id}>{spice.name}</option>
            ))}
          </select>
          <button className="blend-create-delete" onClick={(e) => {
            e.preventDefault();
            setFormData((prevState) => ({
              ...prevState,
              spices: prevState.spices.filter((_s, i) => i !== index)
            }))
          }}><img src="https://i.imgur.com/lFrq8MB.png" alt="delete" width="40px" /></button>
        </div>
      ))}
      <button className="blend-create-add"
        onClick={(e) => {
          e.preventDefault();
          setFormData((prevState) => ({
            ...prevState,
            spices: [
              ...prevState.spices,
              {
                id: "",
                name: "",
              },
            ],
          }));
        }}
      >
        <img src="https://i.imgur.com/uKjzGW7.png" alt="add" width="40px" />
      </button>
      <br />
      <button className="blend-create-save">Save</button>
    </form>
  );
}
