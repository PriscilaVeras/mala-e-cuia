import { useState } from "react";
import api from "../../apis/api";

import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

function AddJobs() {
  const [state, setState] = useState({
    title: "",
    Url: "",
    description: "",
    phone: "",
    company: "",
    companyEmail: "",
    salary: "",
    country: "",
    city: "",
  });

  function handleChange(event) {
    //     if (event.target.files) {
    //       return setState({
    //         ...state,
    //         [event.currentTarget.name]: event.currentTarget.files[0],
    //       });
    //     }

    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }
  //   async function handleFileUpload(file) {
  //     const uploadData = new FormData();

  //     uploadData.append("profilePicture", file);
  //     console.log(uploadData);
  //     const response = await api.post("/upload", uploadData);

  //     return response.data.url;
  //   }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      //   const uploadImage = await handleFileUpload(state.photo);
      const response = await api.post("/emprego", {
        ...state,
      });
      console.log(response);
      setState({
        title: "",
        Url: "",
        description: "",
        phone: "",
        company: "",
        companyEmail: "",
        salary: "",
        country: "",
        city: "",
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          label="Título:"
          name="title"
          onChange={handleChange}
          value={state.title}
        />

        <TextInput
          type="text"
          label="Website:"
          name="Url"
          onChange={handleChange}
          value={state.Url}
        />

        <TextInput
          label="Telefone: "
          name="phone"
          onChange={handleChange}
          value={state.phone}
        />

        <TextInput
          label="Email:"
          name="companyEmail"
          onChange={handleChange}
          value={state.companyEmail}
        />

        <TextInput
          type="text"
          label="Empresa:"
          name="company"
          onChange={handleChange}
          value={state.company}
        />

        <TextInput
          label="Salário:"
          type="text"
          name="salary"
          value={state.salary}
          onChange={handleChange}
        />

        <TextInput
          type="text"
          label="País:"
          name="country"
          onChange={handleChange}
          value={state.country}
        />
        <TextInput
          type="text"
          label="Cidade:"
          name="city"
          onChange={handleChange}
          value={state.city}
        />

        <div>
          <label>Descrição</label>
          <textarea
            className="form-control"
            aria-label="Descrição"
            name="description"
            onChange={handleChange}
            value={state.description}
          ></textarea>
        </div>

        <div className="form-group">
          <button className="btn btn-primary mt-3" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddJobs;
