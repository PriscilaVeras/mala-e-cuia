import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import api from "../../apis/api";

export default function DetailsJobs() {
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
  const history = useHistory();

  const { id } = useParams();
  useEffect(() => {
    async function fetchJobs() {
      try {
        //console.log(id);
        const response = await api.get(`/emprego/${id}`);
        setState({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchJobs();
  }, []);
  const handleJobsDelete = async (event) => {
    try {
      const response = await api.delete(`/emprego/${id}`);

      history.push(`/emprego`);
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <div>
      <div
        className="mt-5 ml-5 "
        style={{ maxHeight: "40vh", maxWidth: "60vw" }}
      >
        <div className="row no-gutters">
          <div className="col-md-3">
            {/* <img
              src={state.photo}
              className="card-img "
              alt="..."
              style={{ maxHeight: "20vh" }}
            /> */}
          </div>
          <div className="col-md-8">
            <div className="card-body " style={{ maxHeight: "30vh" }}>
              <h5 className="card-title ">{state.title}</h5>
              <p className="card-text ">Descrição: {state.description}</p>
              <p>Salário: {state.salary}€</p>
              <p>Empresa: {state.company}</p>
              <p>Website: {state.Url}</p>
            </div>
          </div>

          <button className="btn btn-primary mb-3">
            <Link to={`/editar-emprego/${id}`} className="linksTextWhite">
              Editar
            </Link>
          </button>
          <button className="btn btn-danger" onClick={handleJobsDelete}>
            Excluir
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
}
