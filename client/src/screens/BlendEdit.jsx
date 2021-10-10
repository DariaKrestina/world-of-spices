import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './BlendEdit.css'

export default function BlendEdit(props) {
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
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleBlend = props.blends.find((blend) => blend.id === Number(id));
      setFormData({
        name: singleBlend.name,
        spices: singleBlend.spices
          // .map((spice) => spice.name),
      });
    };
    if (props.blends.length) {
      prefillFormData();
    }
  }, [props.blends, id]);

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
    <form className="blend-edit"
      onSubmit={(e) => {
        e.preventDefault();
        props.handleBlendEdit(id, formData);
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
      {formData.spices.map((_spiceInput, index) => (
        <div className="blend-edit-single-dropdown" key={`select${index}`}>
          <select
            onChange={(e) => handleSelectChange(e, index)}
            defaultValue={formData.spices.map((spice) => spice.name)}
          >
            <option disabled value="default">
              -- Select a Spice --
            </option>
            {spices.map((spice) => (
              <option key={`${index}${spice.id}`} value={spice.id}>{spice.name}</option>
            ))}
          </select>
          <button className="blend-edit-delete" onClick={(e) => {
            e.preventDefault();
            setFormData((prevState) => ({
              ...prevState,
              spices: prevState.spices.filter((_s, i) => i !== index)
            }))
          }}><img src="https://i.imgur.com/lFrq8MB.png" alt="delete" width="40px" /></button>
        </div>
      ))}
      <button className="blend-edit-add"
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
      <button className="blend-edit-save">Save</button>
      <button className="blend-edit-save" onClick={() => props.handleBlendDelete(id)}>Delete</button>
    </form>
  );
}
