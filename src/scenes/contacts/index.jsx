import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../ContextApi/ContextApi";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const {data, setData} = useContext(GlobalContext)

  function handleRowClick(params) {
    console.log(`row clicked`, params.row);
    setData(params.row)
    localStorage.setItem("Vendor", JSON.stringify(params.row));
    navigate(`/vendors/${params.row.name}`);
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

  let mockVendorData = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
    <Box m="0px 20px">
      <Header title="VENDORS" subtitle="List of Vendors for Future Reference" />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockVendorData}
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

export default Contacts;
