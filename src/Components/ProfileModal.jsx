import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { updateProfile } from "../redux/actions/profile";
import { useDispatch, useSelector } from "react-redux";

const ProfileModal = ({ show, handleClose }) => {
  const [profileData, setProfileData] = useState({
    profession: "",
    description: "",
    profileImage: ""
  });

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  React.useEffect(() => {
    if (profile) {
      setProfileData({
        profession: profile.profession || "",
        description: profile.description || "",
        profileImage: profile.profileImage || ""
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    e.preventDefault();
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const profileData = {
      profession: e.target.elements.profession.value,
      description: e.target.elements.description.value
    };
    const profileImage = e.target.elements.profileImage.files[0];
    if (profileData.profession && profileData.description) {
      dispatch(updateProfile(profileData, profileImage));
    } else {
      console.log("Please fill all the fields!");
    }
    console.log("Profile Data Submitted:", profileData);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <div className="mx-auto">
          <Modal.Title
            style={{ color: " rgb(246, 157, 75)" }}
            className="fw-bold"
          >
            Update profile
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="m-0 p-0 mb-1">Profession</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Profession"
              name="profession"
              value={profileData.profession}
              id="profession"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="m-0 p-0 my-1">Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe yourself"
              name="description"
              value={profileData.description}
              id="description"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="m-0 p-0 my-1">Profile Image</Form.Label>
            <Form.Control
              type="file"
              className="border border-secondary-subtle rounded-pill"
              name="profileImage"
              id="articleImage"
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  profileImage: e.target.files[0]
                })
              }
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              className="new-article-button bg-transparent text-dark rounded-pill"
              type="submit"
            >
              Update Profile
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ProfileModal;
