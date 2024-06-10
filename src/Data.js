import React from "react";
import "./data.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { AiFillFile } from "react-icons/ai";
import { FaArrowDownLong } from "react-icons/fa6";
import { db } from "./firebase";
import { useState, useEffect } from "react";

function Data() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    db.collection("myfiles").onSnapshot((snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="data">
      <div className="data_header">
        <div className="data_left">
          <span>My Drive</span>
          <IoMdArrowDropdown />
        </div>
        <div className="data_right">
          <TfiMenuAlt />
          <IoIosInformationCircleOutline />
        </div>
      </div>
      <div className="data_content">
        <div className="data_grid">
          {files.map((file) => {
            return (
              <div className="data__file">
                <AiFillFile />
                <p>{file.data.filename}</p>
              </div>
            );
          })}
        </div>
        <div className="data_list">
          <div className="detailsRow">
            <p>
              <b>
                Name
                <FaArrowDownLong />
              </b>
            </p>
            <p>
              <b>Owner</b>
            </p>
            <p>
              <b>Last Modified</b>
            </p>
            <p>
              <b>File Size</b>
            </p>
          </div>
          {
              files.map((file)=>{
                return <div className="detailsRow">
                <p>
                  <a href={file.data.fileURL} target="_blank" rel="#">
                  <AiFillFile />{file.data.filename} 

                  </a>
                  
                </p>
                <p>Me</p>
                <p>{new Date(file.data.timestamp?.seconds * 1000).toUTCString()}</p>
                <p>1GB</p>
              </div>
              })

            }
        </div>
      </div>
    </div>
  );
}

export default Data;
