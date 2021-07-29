import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";

import api from "../../apis/api";

function EditProfile(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    profilePictureUrl: "",
    country: "",
    city: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get("/profile");

        setState({
          ...response.data,
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfile();
  }, []);

  async function handleFileUpload(file) {
    const uploadData = new FormData();

    uploadData.append("profilePicture", file);
    console.log(uploadData);
    const response = await api.post("/upload", uploadData);

    return response.data.url;
  }

  function handleChange(event) {
    if (event.target.files) {
      return setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }

    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { name, email, profilePictureUrl, country, city } = state;

      const uploadImageProfile = await handleFileUpload(
        state.profilePictureUrl
      );
      const response = await api.put("/profile", {
        ...state,
        profilePictureUrl: uploadImageProfile,
      });
      console.log(response);
      setError(null);
      props.history.push("/auth/profile");
    } catch (err) {
      console.error(err.response);
      setError(err.response.data.error);
    }
  }

  const handleProfileDelete = async (event) => {
    try {
      const response = await api.delete("/profile");
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h1>Editar Perfil</h1>
        <img src={state.profilePictureUrl} />
        <TextInput
          type="text"
          label="Nome"
          name="name"
          value={state.name}
          error={error}
          onChange={handleChange}
          required
        />

        <TextInput
          type="email"
          label="E-mail"
          name="email"
          value={state.email}
          error={error}
          onChange={handleChange}
          required
        />

        <TextInput
          type="country"
          label="País"
          name="country"
          value={state.country}
          error={error}
          onChange={handleChange}
          required
        />

        <TextInput
          type="city"
          label="Cidade"
          name="city"
          value={state.city}
          error={error}
          onChange={handleChange}
          required
        />
        <TextInput
          type="file"
          label="Foto do Perfil"
          name="profilePictureUrl"
          error={error}
          onChange={handleChange}
        />

        <div className="form-group">
          <button className="btn btn-primary mt-3" type="submit">
            Enviar
          </button>
        </div>
      </form>
      <form onClick={handleProfileDelete}>
        <div className="form-group"></div>
        <button className="btn btn-primary mt-3" type="deletet">
          Deletar
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
