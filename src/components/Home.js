//

import { Fragment } from "react";
import EditModal from "./EditModal";
import HomeEdit from "./HomeEdit";

function Home(props) {
  const modalSave = (e) => {};

  const temp = "";

  return (
    <div id="home" className="home">
      <div>
        <EditModal form={<HomeEdit homeData={temp}/>} onSave={modalSave} />
      </div>
      <div>Home page</div>
    </div>
  );
}

export default Home;
