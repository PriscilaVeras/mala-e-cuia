import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";

//Forum components
import CreatePostForum from "../routeComponents/forum/CreatePostForum";
import AllPosts from "../routeComponents/forum/AllPosts";
import DetailsPost from "../routeComponents/forum/DetailsPost";
import EditPost from "../routeComponents/forum/EditPost";

//Informações components
import Contents from "../routeComponents/informacoes/Contents";

// Moradia components
import CreatePostMoradia from "../routeComponents/habitation/CreatePostMoradia";
import AllMoradias from "../routeComponents/habitation/AllMoradias";

import CreatePostJobs from "../routeComponents/jobs/CreatePostJobs";
import AllJobs from "../routeComponents/jobs/AllJobs";

import { AuthContextComponent } from "../contexts/authContext";
import Footer from "./Footer";
import "../assets/styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <div className="container-rotas">
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={AuthRouter} />
            <Route exact path="/forum" component={AllPosts} />
            <Route path="/criar-forum" component={CreatePostForum} />
<<<<<<< HEAD
            {/* <Route path="/criar-moradia" component={CreatePostMoradia} />
            <Route path="/moradia" component={AllMoradias} />
            <Route path="/criar-emprego" component={CreatePostJobs} />
            <Route path="/emprego" component={AllJobs} /> */}
=======
            <Route path="/forum/:id" component={DetailsPost} />
            <Route exact path="/edit-forum/:id" component={EditPost} />
            <Route path="/conteudo/:country" component={Contents} />

            <Route path="/criar-moradia" component={CreatePostMoradia} />
            <Route path="/moradia" component={AllMoradias} />
            <Route path="/criar-emprego" component={CreatePostJobs} />
            <Route path="/emprego" component={AllJobs} />
>>>>>>> d993dee512dd41cdd26f3e8c58c69319dc774a4f
          </div>
        </Switch>
      </AuthContextComponent>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
