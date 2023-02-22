import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "user",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "user",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "user",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "user",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];



export const mockDataContacts = [
  // {
  //   id: 1,
  //   name: "Jon Snow",
  //   email: "jonsnow@gmail.com",
  //   age: 35,
  //   phone: "(665)121-5454",
  //   address: "0912 Won Street, Alabama, SY 10001",
  //   city: "New York",
  //   zipCode: "10001",
  //   registrarId: 123512,
  //   role: "User",
  //   status: "Approved",
  //   date: '2023/08/17',
  // },
  // {
  //   id: 1,
  //   active: false,
  //   name: "Crystal Banquet",
  //   email: "banquet.crystal09@gmail.com",
  //   age: 35,
  //   phone: "02136645195",
  //   address: "D-3 Block N North Nazimabad Town, karachi ",
  //   city: "New York",
  //   zipCode: "10001",
  //   registrarId: 123512,
  //   role: "Vendor",
  //   status: "Approved",
  //   date: '2023-02-21',
  //   nicNumber:'42101-7634906-8',
  //   nicImage:'https://res.cloudinary.com/bng/image/upload/v1676939056/jwjku6w3m3fsz7cwbsyt.jpg',
  //   coverImage:"https://res.cloudinary.com/bng/image/upload/v1676939057/cndb6fqxapyx8xf1ltr7.jpg",
  //   videos:[
  //       'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985858/venueVideos/omh5zq9r3oudeytofxmt.mp4',
  //       'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985856/venueVideos/equ0fqxzrnli3uid5ztb.mp4',
  //       'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985895/venueVideos/gpsm5p30aw92rp8hmrj6.mp4',
  //       'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985891/venueVideos/ii6cxw6acdcezar15krk.mp4',
  //       'https://res.cloudinary.com/ddpxcjmjn/video/upload/v1676985893/venueVideos/bbtbjnakw2dzutrvwnwl.mp4',
  //   ],
  //   imgaes:[
  //       'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986180/venueImages/ouxpoehlq1x6gyzrr8f7.jpg',
  //       'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986189/venueImages/ctehbtwaruu8y8iqfkg9.jpg',
  //       'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986190/venueImages/v3obrulz6bkkqxl2jhmo.jpg',
  //       'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986182/venueImages/xygx6mbakgffa6qpkezb.jpg',
  //       'https://res.cloudinary.com/ddpxcjmjn/image/upload/v1676986181/venueImages/rjki67e1ae3njpoqlnjk.jpg',
  //   ]
  // },
  // {
  //   id: 2,
  //   name: "Cersei Lannister",
  //   email: "cerseilannister@gmail.com",
  //   age: 42,
  //   phone: "(421)314-2288",
  //   address: "1234 Main Street, New York, NY 10001",
  //   city: "New York",
  //   zipCode: "13151",
  //   registrarId: 123512,
  //   role: "Vendor",
  //   status: "Pending",
  //   date: '2023/08/17',
  // },
  // {
  //   id: 3,
  //   name: "Jaime Lannister",
  //   email: "jaimelannister@gmail.com",
  //   age: 45,
  //   phone: "(422)982-6739",
  //   address: "3333 Want Blvd, Estanza, NAY 42125",
  //   city: "New York",
  //   zipCode: "87281",
  //   registrarId: 4132513,
  //   role: "User",
  //   status: "Approved",
  //   date: '2023/08/17',
  // },
  // {
  //   id: 4,
  //   name: "Anya Stark",
  //   email: "anyastark@gmail.com",
  //   age: 16,
  //   phone: "(921)425-6742",
  //   address: "1514 Main Street, New York, NY 22298",
  //   city: "New York",
  //   zipCode: "15551",
  //   registrarId: 123512,
  //   role: "Vendor",
  //   status: "Pending",
  //   date: '2023/08/17',
  // },
  // {
  //   id: 5,
  //   name: "Daenerys Targaryen",
  //   email: "daenerystargaryen@gmail.com",
  //   age: 31,
  //   phone: "(421)445-1189",
  //   address: "11122 Welping Ave, Tenting, CD 21321",
  //   city: "Tenting",
  //   zipCode: "14215",
  //   registrarId: 123512,
  //   role: "User",
  //   status: "Approved",
  //   date: '2023/08/17',
  // },
  // {
  //   id: 6,
  //   name: "Ever Melisandre",
  //   email: "evermelisandre@gmail.com",
  //   age: 150,
  //   phone: "(232)545-6483",
  //   address: "1234 Canvile Street, Esvazark, NY 10001",
  //   city: "Esvazark",
  //   zipCode: "10001",
  //   registrarId: 123512,
  //   role: "Vendor",
  //   status: "Pending",
  //   date: '2023/08/17',
  // },
  // {
  //   id: 7,
  //   name: "Ferrara Clifford",
  //   email: "ferraraclifford@gmail.com",
  //   age: 44,
  //   phone: "(543)124-0123",
  //   address: "22215 Super Street, Everting, ZO 515234",
  //   city: "Evertin",
  //   zipCode: "51523",
  //   registrarId: 123512,
  //   role: "User",
  //   status: "Approved",
  //   date: '2023/08/17',
  // },
  // {
  //   id: 8,
  //   name: "Rossini Frances",
  //   email: "rossinifrances@gmail.com",
  //   age: 36,
  //   phone: "(222)444-5555",
  //   address: "4123 Ever Blvd, Wentington, AD 142213",
  //   city: "Esteras",
  //   zipCode: "44215",
  //   registrarId: 512315,
  //   role: "Vendor",
  //   status: "Pending",
  //   date: '2023/08/17',
  // },
  // {
  //   id: 9,
  //   name: "Harvey Roxie",
  //   email: "harveyroxie@gmail.com",
  //   age: 65,
  //   phone: "(444)555-6239",
  //   address: "51234 Avery Street, Cantory, ND 212412",
  //   city: "Colunza",
  //   zipCode: "111234",
  //   registrarId: 928397,
  //   role: "User",
  //   status: "Approved",
  //   date: '2023/08/17',
  // },
  // {
  //   id: 10,
  //   name: "Enteri Redack",
  //   email: "enteriredack@gmail.com",
  //   age: 42,
  //   phone: "(222)444-5555",
  //   address: "4123 Easer Blvd, Wentington, AD 142213",
  //   city: "Esteras",
  //   zipCode: "44215",
  //   registrarId: 533215,
  //   role: "Vendor",
  //   status: "Pending",
  //   date: '2023/08/17',
  // },
  // {
  //   id: 11,
  //   name: "Steve Goodman",
  //   email: "stevegoodmane@gmail.com",
  //   age: 11,
  //   phone: "(444)555-6239",
  //   address: "51234 Fiveton Street, CunFory, ND 212412",
  //   city: "Colunza",
  //   zipCode: "1234",
  //   registrarId: 92197,
  //   role: "User",
  //   status: "Approved",
  //   date: '2023/08/17',
  // },
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
    date: '2023-02-21',
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
    date: '2023-02-21',
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
    date: '2023-02-21',
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
    date: '2023-02-21',
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
    date: '2023-02-21',
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
    date: '2023-02-21',
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
    role: "User",
    status: "Approved",
    date: '2023-02-21',
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
    role: "User",
    status: "Approved",
    date: '2023-02-21',
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
  }
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
