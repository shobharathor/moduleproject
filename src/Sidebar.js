import React, { useState } from "react";
import "./sidebar.css";
import { MdOutlineMobileScreenShare } from "react-icons/md";
import { MdOutlineDevices } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { IoStarOutline } from "react-icons/io5";
import { LuTrash } from "react-icons/lu";
import { CiCloudOn } from "react-icons/ci";
import { Modal } from "@mui/material";
import { db, storage } from "./firebase";
import firebase from "firebase";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleUpload = (event) => {
    event.preventDefault();
    setUploading(true);

    storage
      .ref(`files/${file.name}`)
      .put(file)
      .then((snapshot) => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("myfiles").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              filename:file.name,
              fileURL:url,
              size:snapshot._delegate.bytesTransferred
            });
               setUploading(false);
               setFile(null);
               setOpen(false);
          });
      });
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className="modal_pop">
          <form>
            <div className="modalHeading">
              <h3>Select file you want to upload</h3>
            </div>
            <div className="modalBody">
              {uploading ? (
                <p className="uploading">Uploading</p>
              ) : (
                <>
                  <input type="file" onChange={handleChange} />
                  <input
                    type="submit"
                    className="post_submit"
                    onClick={handleUpload}
                  />
                </>
              )}
            </div>
          </form>
        </div>
      </Modal>

      <div className="sidebar">
        <div className="sidebar_btn">
          <button onClick={handleOpen}>
            <img
              src="https://user-images.githubusercontent.com/76736580/133988452-df027150-b6a4-45d2-9a7b-721b3a1edc80.png"
              alt="#"
            />
          </button>
        </div>

        <div className="sidebar_option sidebar_option-active">
          <MdOutlineMobileScreenShare />
          <span>My Drive</span>
        </div>
        <div className="sidebar_option">
          <MdOutlineDevices />
          <span>Computers</span>
        </div>
        <div className="sidebar_option">
          <MdPeopleAlt />
          <span>Shared with me</span>
        </div>
        <div className="sidebar_option">
          <FiClock />
          <span>Recent</span>
        </div>
        <div className="sidebar_option">
          <IoStarOutline />
          <span>Starred</span>
        </div>
        <div className="sidebar_option">
          <LuTrash />
          <span>Trash</span>
        </div>
        <hr />
        <div className="Sidebar_optiona">
          <div className="sidebar_option">
            <CiCloudOn />
            <span>Storage</span>
          </div>
          <div className="progress_bar">
            <progress size="tiny" value="50" max="100" />
            <span>6.45 GB of 15 GB used</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
