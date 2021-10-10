import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <form
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
        <div key={`select${index}`}>
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
      <button onClick={() => props.handleBlendDelete(id)}>Delete</button>
    </form>
  );
}
