import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../ContextApi/ContextApi";
import "./VendorProfile.css";

import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedIcon from '@mui/icons-material/Verified';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import SendIcon from '@mui/icons-material/Send';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import BlockIcon from '@mui/icons-material/Block';

const VendorProfile = (props) => {
  // let navigate = useNavigate()

  // const {data, setData} = useContext(GlobalContext)
  // useEffect(() => {
  //   if(data.length <= 0){
  //     navigate('/vendors')
  //   }

  // }, [data])

  let data = JSON.parse(localStorage.getItem("Vendor"));
  // console.log(data.name)

  return (
    <div className="user-profile">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom:'40px',
        }}
      >
        <div style={{  textAlign: "center" }}>
          <img
            src={
              data.coverImage
            }
            className="VendorPic"
            alt={"user.name"}
          />
          <h2>{data.name}</h2>
        </div>
        <div style={{ marginRight: "10px" }}>
          {/* <CustomizedMenus /> */}
        </div>
      </div>
      {/* <p>user.bio Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptate consequatur voluptates pariatur? Quos, sunt qui magnam fugit, quibusdam soluta voluptas beatae sed accusamus non, tempora enim in ut rerum.</p> */}
      <div style={{ width: "100%", paddingLeft: "40px", margin: "20px 0px" }}>
        <ul>
          {/* <li>
            <h2>{"Venue.name"}</h2>
          </li> */}
          <li>
            <strong>Email:</strong> {data.email}
          </li>
          <li>
            <strong>Phone:</strong> {data.phone}
          </li>
          <li>
            <strong>Address:</strong> {data.address}
          </li>
          <li>
            <strong>CNIC No:</strong> {data.nicNumber}
          </li>
          <li>
            <strong>Role:</strong> {data.role}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VendorProfile;

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Options
      </Button> */}

      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <PendingActionsIcon />
          Request Pending
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={handleClose} disableRipple>
          <SendIcon />
          Send Contract
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <DirectionsWalkIcon />
          Restaurant Visit
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <VerifiedIcon />
          Approve This Vendor
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <BlockIcon />
          Reject This Vendor
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <DeleteIcon />
          Delete Vendor
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
