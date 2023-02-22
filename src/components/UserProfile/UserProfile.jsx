import React from "react";
import "./VendorProfile.css";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img
        src={
          "https://media.zigcdn.com/media/content/2021/Jun/chironsstitle_640x480.jpg"
        }
        alt={"user.name"}
      />
      <h2>{"user.name"}</h2>
      {/* <p>user.bio Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate consequatur voluptates pariatur? Quos, sunt qui magnam fugit, quibusdam soluta voluptas beatae sed accusamus non, tempora enim in ut rerum.</p> */}
      <div style={{ width: "100%", paddingLeft: "40px", margin: "20px 0px" }}>
        <ul>
          <li>
            <h2>{"Venue.name"}</h2>
          </li>
          <li>
            <strong>Email:</strong> {"user.email"}
          </li>
          <li>
            <strong>Phone:</strong> {"user.phone"}
          </li>
          <li>
            <strong>Address:</strong> amet consectetur adipisicing elit.
            Corrupti, accusamus minus ea possimu
          </li>
          <li>
            <strong>Total Capacity:</strong> {"Venue.Capacity"}
          </li>
          <li>
            <strong>Price:</strong> {"Venue.price"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
