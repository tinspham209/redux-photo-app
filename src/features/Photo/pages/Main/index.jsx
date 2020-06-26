import Banner from "components/Banner";
import Images from "constants/images";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import Banner from "./components/Banner";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const history = useHistory();
  console.log("photos", photos);

  const handlePhotoEditClick = (photo) => {
    console.log("Edit: ", photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    console.log("Remove: ", photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>

      <PhotoList
        photoList={photos}
        onPhotoEditClick={handlePhotoEditClick}
        onPhotoRemoveClick={handlePhotoRemoveClick}
      />
    </div>
  );
}

export default MainPage;
