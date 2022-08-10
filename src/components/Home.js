//

// import { Fragment } from "react";
import EditModal from "./EditModal";
import HomeEdit from "./HomeEdit";
import man from "../man_pointing.png";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData, updateHomeDataThunk } from "../app/homeSlice";

function Home(props) {
  const homeData = useSelector(getHomeData);
  const dispatch = useDispatch();

  function modalSave(e) {
    const formData = e.target;

    dispatch(updateHomeDataThunk({
      introduction: formData.introduction.value,
      description: formData.description.value,
    }));
  }

  return (
    <div id="home" className="home">
      <div>
        <EditModal form={<HomeEdit homeData={homeData} />} onSave={modalSave} />
      </div>
      <div className="banner">
        <div>{homeData.introduction}</div>
        <div>
          <img src={man} alt="Man pointing" />
        </div>
        <div className="description">
          <h2>
            {homeData.description}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
