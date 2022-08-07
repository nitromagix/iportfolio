//

import { Fragment } from "react";
import EditModal from "./EditModal";
import HomeEdit from "./HomeEdit";
import man from "../man_pointing.png";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData, setHomeData } from "../app/homeSlice";

function Home(props) {
  const homeData = useSelector(getHomeData);
  const dispatch = useDispatch();

  function modalSave(e) {
    const formData = e.target;

    dispatch(
      setHomeData({
        introduction: formData.introduction.value,
      })
    );
  }

  return (
    <div id="home" className="home">
      <div>
        <EditModal form={<HomeEdit homeData={homeData} />} onSave={modalSave} />
      </div>
      <div className="banner">
        <div>{homeData.introduction}</div>
        <div>
          <img src={man} alt="edit" />
        </div>
      </div>
    </div>
  );
}

export default Home;
