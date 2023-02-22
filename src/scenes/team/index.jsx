import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts, mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { useState } from "react";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  function handleRowClick(params) {
    localStorage.setItem('User', JSON.stringify(params.row));
    console.log(`row clicked`, params.row );
    navigate(`/users/${params.row.name}`)
  }

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    // { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
    },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   headerAlign: "left",
    //   align: "left",
    // },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   flex: 1,
    // },
    // {
    //   field: "city",
    //   headerName: "City",
    //   flex: 1,
    // },
    // {
    //   field: "zipCode",
    //   headerName: "Zip Code",
    //   flex: 1,
    // },
  ];
  const [isSidebar, setIsSidebar] = useState(true);

  let UserMockData = [
    {
      id: 1,
      active: false,
      name: "Muhammad Huzaifa",
      email: "mhuzaifa09@gmail.com",
      age: 35,
      phone: "03336645195",
      address: "L-34 Surjaani Town, karachi ",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "User",
      status: "Approved",
      date: '2023-02-11',
      nicNumber:'42101-7634906-8',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676939056/jwjku6w3m3fsz7cwbsyt.jpg',
      coverImage:"https://media.nojoto.com/content/media/77323/2018/08/profile/883454b3987e9d075409e5dc4ecaa186_77323.jpg",
      videos:[
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985858/venueVideos/omh5zq9r3oudeytofxmt.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985856/venueVideos/equ0fqxzrnli3uid5ztb.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985895/venueVideos/gpsm5p30aw92rp8hmrj6.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985891/venueVideos/ii6cxw6acdcezar15krk.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985893/venueVideos/bbtbjnakw2dzutrvwnwl.mp4',
      ],
      imgaes:[
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986180/venueImages/ouxpoehlq1x6gyzrr8f7.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986189/venueImages/ctehbtwaruu8y8iqfkg9.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986190/venueImages/v3obrulz6bkkqxl2jhmo.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986182/venueImages/xygx6mbakgffa6qpkezb.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986181/venueImages/rjki67e1ae3njpoqlnjk.jpg',
      ]
    },
    {
      id: 2,
      active: false,
      name: "Kaamil Jamaal",
      email: "k.jamaal1992@gmail.com",
      age: 35,
      phone: "03474519509",
      address: "H#83, Street#127, K Area, Korangi, karachi ",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "User",
      status: "Approved",
      date: '2023-02-09',
      nicNumber:'42101-7634906-8',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676939056/jwjku6w3m3fsz7cwbsyt.jpg',
      coverImage:"https://www.maxpixel.net/static/photo/640/Man-Boy-Handsome-Kashmiri-Fashion-Stylish-7079186.jpg",
      videos:[
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985858/venueVideos/omh5zq9r3oudeytofxmt.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985856/venueVideos/equ0fqxzrnli3uid5ztb.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985895/venueVideos/gpsm5p30aw92rp8hmrj6.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985891/venueVideos/ii6cxw6acdcezar15krk.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985893/venueVideos/bbtbjnakw2dzutrvwnwl.mp4',
      ],
      imgaes:[
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986180/venueImages/ouxpoehlq1x6gyzrr8f7.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986189/venueImages/ctehbtwaruu8y8iqfkg9.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986190/venueImages/v3obrulz6bkkqxl2jhmo.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986182/venueImages/xygx6mbakgffa6qpkezb.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986181/venueImages/rjki67e1ae3njpoqlnjk.jpg',
      ]
    },
    {
      id: 3,
      active: false,
      name: "Maaz Bin Ahsan",
      email: "syedmaaz@gmail.com",
      age: 35,
      phone: "03001231350",
      address: "Block 4, Federal B Area, karachi ",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "User",
      status: "Approved",
      date: '2023-02-19',
      nicNumber:'42101-7634906-8',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676939056/jwjku6w3m3fsz7cwbsyt.jpg',
      coverImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHCOaPrvgEjjYR5cSAv8M79Co_7KIYtM7Aw&usqp=CAU",
      videos:[
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985858/venueVideos/omh5zq9r3oudeytofxmt.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985856/venueVideos/equ0fqxzrnli3uid5ztb.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985895/venueVideos/gpsm5p30aw92rp8hmrj6.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985891/venueVideos/ii6cxw6acdcezar15krk.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985893/venueVideos/bbtbjnakw2dzutrvwnwl.mp4',
      ],
      imgaes:[
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986180/venueImages/ouxpoehlq1x6gyzrr8f7.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986189/venueImages/ctehbtwaruu8y8iqfkg9.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986190/venueImages/v3obrulz6bkkqxl2jhmo.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986182/venueImages/xygx6mbakgffa6qpkezb.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986181/venueImages/rjki67e1ae3njpoqlnjk.jpg',
      ]
    },
    {
      id: 4,
      active: false,
      name: "Ahmer Arif",
      email: "ahmerarif123@gmail.com",
      age: 35,
      phone: "03106937257",
      address: "2/227 Liaqatabad, karachi ",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "User",
      status: "Approved",
      date: '2023-02-02',
      nicNumber:'42101-7634906-8',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676939056/jwjku6w3m3fsz7cwbsyt.jpg',
      coverImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGiCrlr_VVXm6uSEAu_JDAXtdI_XJ-ycjrGQ&usqp=CAU",
      videos:[
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985858/venueVideos/omh5zq9r3oudeytofxmt.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985856/venueVideos/equ0fqxzrnli3uid5ztb.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985895/venueVideos/gpsm5p30aw92rp8hmrj6.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985891/venueVideos/ii6cxw6acdcezar15krk.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985893/venueVideos/bbtbjnakw2dzutrvwnwl.mp4',
      ],
      imgaes:[
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986180/venueImages/ouxpoehlq1x6gyzrr8f7.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986189/venueImages/ctehbtwaruu8y8iqfkg9.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986190/venueImages/v3obrulz6bkkqxl2jhmo.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986182/venueImages/xygx6mbakgffa6qpkezb.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986181/venueImages/rjki67e1ae3njpoqlnjk.jpg',
      ]
    },
    {
      id: 5,
      active: false,
      name: "Syed Ali",
      email: "syed009@gmail.com",
      age: 35,
      phone: "03212566234 ",
      address: "L-1 Five Star Chowrangi, Block L North Nazimabad Town, Karachi",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "User",
      status: "Approved",
      date: '2023-02-01',
      nicNumber:'42101-7634906-0',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676984316/ucscmhrjgxhd7oi31id3.jpg',
      coverImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqsUbYAv12j7Z-zeh6Bw_XAJDRGw-vdqtpw&usqp=CAU",
      videos:[
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676990016/venueVideos/vi3nexnilgxuvpxj50bg.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676990014/venueVideos/xqphsou73a41vqctgjtt.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676990017/venueVideos/pshmqqnseqxai7ly8zkr.mp4',
          
      ],
      imgaes:[
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676990049/venueImages/q3d8xphyvoxjrujs25uz.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676990057/venueImages/o9amzawu0g4nc5wdcjht.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676990055/venueImages/xwryfatgbdtdb5kxqpt5.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676990052/venueImages/nmvxv0wzztxs96zhkjy2.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676990050/venueImages/hcbpmjyprjb3xyyyddvq.jpg',
      ]
    },
  
    {
      id: 6,
      active: false,
      name: "Ali Hussain",
      email: "ali889@gmail.com",
      age: 35,
      phone: "03002566234 ",
      address: "B1 , 16th street North Nazimabad, Karachi",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "User",
      status: "Approved",
      date: '2023-01-21',
      nicNumber:'42101-7634222-8',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676984316/ucscmhrjgxhd7oi31id3.jpg',
      coverImage:"https://www.teahub.io/photos/full/311-3116253_boys-pics-for-dp-handsome-boys-dp.jpg",
      videos:[
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676990016/venueVideos/vi3nexnilgxuvpxj50bg.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676990014/venueVideos/xqphsou73a41vqctgjtt.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676990017/venueVideos/pshmqqnseqxai7ly8zkr.mp4',
          
      ],
      imgaes:[
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676990049/venueImages/q3d8xphyvoxjrujs25uz.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676990057/venueImages/o9amzawu0g4nc5wdcjht.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676990055/venueImages/xwryfatgbdtdb5kxqpt5.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676990052/venueImages/nmvxv0wzztxs96zhkjy2.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676990050/venueImages/hcbpmjyprjb3xyyyddvq.jpg',
      ]
    },
  ]

  return (
    <>
    <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
    <Box m="0px 20px">
      <Header title="USERS" subtitle="List of Users for Future Reference" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {/* <DataGrid checkboxSelection rows={mockDataTeam} columns={columns}  /> */}
        <DataGrid
          rows={UserMockData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={handleRowClick}
        />
      </Box>
    </Box>
    </main>
    </>
  );
};

export default Team;
