import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts, mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import GroupIcon from "@mui/icons-material/Group";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { GridRowParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [True, setTrue] = useState(true);

  // const reload = () => {
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 0);
  //   console.log("123")
  // };
  // reload();

  // if (True) {
  // }
  //   setTrue(false)

  function handleRowClick(params) {
    console.log(`row clicked`, params.row);
    // do something with the row data
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

  let allUsersData = [
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
    {
      id: 7,
      active: false,
      name: "Crystal Banquet",
      email: "banquet.crystal09@gmail.com",
      age: 35,
      phone: "02136645195",
      address: "D-3 Block N North Nazimabad Town, karachi ",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "Vendor",
      status: "Approved",
      date: '2023-01-29',
      nicNumber:'42101-7634906-8',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676939056/jwjku6w3m3fsz7cwbsyt.jpg',
      coverImage:"https://res.cloudinary.com/bng/image/upload/v1676939057/cndb6fqxapyx8xf1ltr7.jpg",
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
      id: 8,
      active: false,
      name: "Roop Banquet",
      email: "banquet.roop09@gmail.com",
      age: 35,
      phone: "02136643319",
      address: "D-4 Block-N North Nazimabad, near Sakhi Hassan Chowrangi, Karachi ",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "Vendor",
      status: "Approved",
      date: '2023-02-03',
      nicNumber:'42101-7634906-7',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676939521/tgbdof3kezpvdroiubp0.jpg',
      coverImage:"https://res.cloudinary.com/bng/image/upload/v1676939522/tcm2a7vq1vc3y4kbl3mr.jpg",
      videos:[
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989107/venueVideos/cxn9oikpiqk2iunw15j1.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989105/venueVideos/cjoajugit0thgamz3bkc.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989109/venueVideos/edrpel9fc2j12hhylybe.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989111/venueVideos/mwuzfwul1zdh0dncmgvb.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676990120/venueVideos/wfzh6ytgzli6tjxgiasq.mp4',
      ],
      imgaes:
      [
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989691/venueImages/jbsbg4qb4jdaegjazspj.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989692/venueImages/c5oizmgfelyf9gtajfhd.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989699/venueImages/smymir3hscsa7wkbpljn.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989694/venueImages/rqm6lyacfqjoxas4aloj.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989701/venueImages/affcwtdwfgghekg5nih5.jpg',
      ],
    },
  
    {
      id: 9,
      active: false,
      name: "Sofitel Banquet",
      email: "banquet.sofital09@gmail.com",
      age: 35,
      phone: "02136633030",
      address: "Block I North Nazimabad Town, Karachi, Karachi City, Sindh",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "Vendor",
      status: "Approved",
      date: '2023-01-21',
      nicNumber:'42101-7634906-6',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676982083/lvluwej6otnfvzocxgm5.jpg',
      coverImage:"https://res.cloudinary.com/bng/image/upload/v1676982084/mynmtwumblobe9lpqtn7.jpg",
      videos:[
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989636/venueVideos/cv4d8act556rrjsixnaf.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989639/venueVideos/rgzlkirvjbgxszgwufie.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989638/venueVideos/jeawzj1gcidlouzyvgk2.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989657/venueVideos/gxkpfcsm0ixnfwsb0q3q.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989655/venueVideos/vm7yk8lvqh2nybnep4xj.mp4',
      ],
      imgaes:[
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989149/venueImages/wupkhaty9z4fepjtosdd.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989147/venueImages/y5c9xgoelj89tzxe5iuq.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989152/venueImages/e8kff6pn6nvpjuovs3tg.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989148/venueImages/ro4geayusreo9qgszixc.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989150/venueImages/doanrt3mdwxqwm09y7wn.jpg',
      ]
    },
  
    {
      id: 10,
      active: false,
      name: "Andalusian Banquets",
      email: "banquet.andalusian09@gmail.com",
      age: 35,
      phone: "0304 1115211",
      address: "33 Zulfiqar Street 1, DHA Karachi Phase VIII Zone A Zone A Phase 8 Defence Housing Authority, Karachi, Karachi City, Sindh",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "Vendor",
      status: "Approved",
      date: '2023-02-14',
      nicNumber:'42101-7634906-5',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676982406/ss1qktcpzgmbyqv3fgl8.jpg',
      coverImage:"https://res.cloudinary.com/bng/image/upload/v1676982407/eep4ukycajfb5h5uqtc6.jpg",
      videos:[
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989107/venueVideos/cxn9oikpiqk2iunw15j1.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989105/venueVideos/cjoajugit0thgamz3bkc.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989109/venueVideos/edrpel9fc2j12hhylybe.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989111/venueVideos/mwuzfwul1zdh0dncmgvb.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676990120/venueVideos/wfzh6ytgzli6tjxgiasq.mp4',
      ],
      imgaes:[
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989149/venueImages/wupkhaty9z4fepjtosdd.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989147/venueImages/y5c9xgoelj89tzxe5iuq.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989152/venueImages/e8kff6pn6nvpjuovs3tg.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989148/venueImages/ro4geayusreo9qgszixc.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989150/venueImages/doanrt3mdwxqwm09y7wn.jpg',
      ]
    },
    {
      id: 11,
      active: false,
      name: "Casablanca Banquet",
      email: "banquet.casablanca09@gmail.com",
      age: 35,
      phone: "021 36721090 ",
      address: "D-1 Shahrah-e-Sher Shah Suri, Block J North Nazimabad Town, Karachi",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "Vendor",
      status: "Approved",
      date: '2023-02-11',
      nicNumber:'42101-7634906-5',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676982794/a9kuurf9sai2fcfeir5t.jpg',
      coverImage:"https://res.cloudinary.com/bng/image/upload/v1676982795/mtpzsydawuxw4xkqyyu9.jpg",
      videos:[
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676987389/venueVideos/lojtkvnpkikmzvh7lwyr.mp4',
          
      ],
      imgaes:[
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676988624/venueImages/tjcigamuy6gxtiny3lef.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676988620/venueImages/zhqhkrbvl9een1bqyipe.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676988626/venueImages/lhminnnbjb2cyekynoza.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676988627/venueImages/yy1kiarazoxru8d03amc.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676988621/venueImages/ltxkwuwvjejjypdl4hh9.jpg',
      ]
    },
  
    {
      id: 12,
      active: false,
      name: "Elegant Banquet",
      email: "banquet.elegant09@gmail.com",
      age: 35,
      phone: "02136639820",
      address: "D 5, Block I North Nazimabad Town, Karachi,",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "Vendor",
      status: "Approved",
      date: '2023-01-21',
      nicNumber:'42101-7634906-5',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676983338/nhopoe0y0dqph4vxyqin.jpg',
      coverImage:"https://res.cloudinary.com/bng/image/upload/v1676983339/uknet3wsbwgwq44btvyq.jpg",
      videos:[
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989776/venueVideos/uzgmdhja5fvveqcdkvgd.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989778/venueVideos/ttchb7zfvkqt2jhhxktm.mp4',
          
      ],
      imgaes:[
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989811/venueImages/qgpvnjbovwal1rziv7ad.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989810/venueImages/qvwzldftwshnsaulc0fc.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989809/venueImages/fobjpzcoqys0tw4foyrx.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989812/venueImages/aawh4sw2b3eebzuw6guw.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989813/venueImages/p9kyxsb9twjjuw1xyj07.jpg',
      ]
    },{
      id: 13,
      active: false,
      name: "Roses Banquet",
      email: "banquet.roses09@gmail.com",
      age: 35,
      phone: "03106225553 ",
      address: "Imam Clinic، 5 Star Chaurangi، Near Block L North Nazimabad Town, Karachi",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "Vendor",
      status: "Approved",
      date: '2023-02-01',
      nicNumber:'42101-7634906-4',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676983614/ymgcxli2l6rf0dpqqdub.jpg',
      coverImage:"https://res.cloudinary.com/bng/image/upload/v1676983615/qdemkawjsr5q0bo6aggf.jpg",
      videos:[
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989385/venueVideos/jftncjjsjtg3u01izzpm.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989383/venueVideos/xt0ig7ytblel6m750d0o.mp4',
          'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676989382/venueVideos/mysysi2oiknmuruexzu9.mp4',
          
      ],
      imgaes:[
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989418/venueImages/wrii87xyvbdsy82nvnte.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989420/venueImages/jza95fyvah3u4an49ykr.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989419/venueImages/ipibhcjlupgfmykmlwxj.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989421/venueImages/yj5ibcdloezsdge1fb3n.jpg',
          'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676989422/venueImages/ydexv72ksuodsox5lr22.jpg',
      ]
    },
  
    {
      id: 14,
      active: false,
      name: "Al-Mehmil Banquet",
      email: "banquet.almehmil09@gmail.com",
      age: 35,
      phone: "02136642167 ",
      address: "D-1 Block L, Five Star Chowrangi, Block L North Nazimabad Town, Karachi",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
      role: "Vendor",
      status: "Approved",
      date: '2023-02-12',
      nicNumber:'42101-7634906-3',
      nicImage:'https://res.cloudinary.com/bng/image/upload/v1676983932/mclkhfjdqbrfxwkjh169.jpg',
      coverImage:"https://res.cloudinary.com/bng/image/upload/v1676983933/cr2qxn3dl6wxhcnswiwh.png",
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
        {/* <Sidebar isSidebar={isSidebar} />
              <Topbar setIsSidebar={setIsSidebar} /> */}

        <Box className="overflowDiv" m="20px" height="87vh" overflow="scroll">
          {/* HEADER */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

            {/* <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box> */}
          </Box>

          {/* GRID & CHARTS */}
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
          >
            {/* ROW 1 */}
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <StatBox
                title="14"
                subtitle="All Customer"
                progress="0.75"
                increase="+14%"
                icon={
                  <GroupIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="06"
                subtitle="Users"
                progress="0.50"
                increase="+21%"
                icon={
                  <AccessibilityNewIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="08"
                subtitle="Vendors"
                progress="0.30"
                increase="+5%"
                icon={
                  <PointOfSaleIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="0"
                subtitle="Pending Request"
                progress="0.80"
                increase="+43%"
                icon={
                  <PendingActionsIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Box>

          {/* ROW 2 */}
          {/* <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

         ROW 3 
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}

          {/* Row 2 */}

          <Box mt="20px">
            <Header title="ALL CUSTOMERS" subtitle="List of all customers" />
            <Box
              m="10px 0 0 0"
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
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                  color: `${colors.grey[100]} !important`,
                },
              }}
            >
              <DataGrid
                rows={allUsersData}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                onRowClick={handleRowClick}
              />
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
};

export default Dashboard;
