//

import { setContactData } from "./contactSlice";
import { setHomeData } from "./homeSlice";
import { setUserData } from "./userSlice";
import { setExperienceData } from "./experienceSlice";
import { setPortfolioData } from "./portfolioSlice";

const API_URL = "http://localhost:3333/profiles/62f0547767da340acb25b9b2";

export const fetchDataThunk = async (dispatch, getState) => {

  // let state = getState();
  const response = await fetch(API_URL);
  const responseJson = await response.json();
  // console.log(responseJson);

  dispatch(
    setUserData({
      id: responseJson._id,
      name: responseJson.name,
      photo: responseJson.photo,
    })
  );

  dispatch(
    setHomeData({
      introduction: responseJson.introduction,
      description: responseJson.description,
    })
  );

  dispatch(setExperienceData(responseJson.experience));

  dispatch(setPortfolioData(responseJson.portfolio));

  dispatch(
    setContactData({
      email: responseJson.email,
      phone: responseJson.phone,
      instagram: responseJson.instagram,
      linkedin: responseJson.linkedin,
      github: responseJson.github,
    })
  );
};


