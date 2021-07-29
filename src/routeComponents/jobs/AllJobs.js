import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import api from "../../apis/api";

function AllJobs() {
  const [empregos, setEmpregos] = useState([]);

  // buscar e montar todos os posts do back
  useEffect(() => {
    async function fetchEmpregos() {
      try {
        const response = await api.get("/emprego");
        console.log(response);
        setEmpregos([...response.data]);

        console.log("oi");
      } catch (err) {
        console.log(err);
      }
    }
    fetchEmpregos();
  }, []);

  return (
    <div className="container mt-5">
      {empregos.map((emprego) => {
        return (
          <Link to={`/emprego/${emprego._id}`}>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  {/* <img src={moradia.photo} className="card-img" alt="..." /> */}
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{emprego.title}</h5>
                    <p className="card-text">{emprego.description}</p>
                    <p className="card-text">
                      <small className="text-muted">{emprego.salary}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllJobs;
