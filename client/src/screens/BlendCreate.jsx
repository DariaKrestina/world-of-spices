import { useState } from "react";
import { addSpiceToBlend } from "../services/blends";

export default function BlendCreate(props) {
  const [selectedSpice, setSelectedSpice] = useState("");
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
    ],
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
  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedSpice(value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newSpice = await addSpiceToBlend(selectedSpice, id);
  // };

  return (
    <form
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
        <div key={`select${index}`}>
          <select
            onChange={(e) => handleSelectChange(e, index)}
            defaultValue="default"
          >
            <option disabled value="default">
              -- Select a Spice --
            </option>
            {spices.map((spice) => (
              <option key={`${index}${spice.id}`} value={spice.id}>{spice.name}</option>
            ))}
          </select>
          <button onClick={(e) => {
            e.preventDefault();
            setFormData((prevState) => ({
              ...prevState,
              spices: prevState.spices.filter((_s, i) => i !== index)
            }))
          }}>Delete</button>
        </div>
      ))}
      <button
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
        Add
      </button>
      <br />
      <button>Save</button>
    </form>
  );
}
