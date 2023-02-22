import React, { useState } from "react";
import ReactPlayer from "react-player";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const VideoGallery = () => {
  const [videos, setVideos] = useState([
    {
      title: "Video 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://youtu.be/nLQ-9vfEjUI",
    },
    {
      title: "Video 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://youtu.be/nLQ-9vfEjUI",
    },
    {
      title: "Video 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://youtu.be/nLQ-9vfEjUI",
    },
    {
      title: "Video 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://youtu.be/nLQ-9vfEjUI",
    },
  ]);
  let data = JSON.parse(localStorage.getItem("Vendor"));

  return (
    <div className="video-gallery">
      {data.videos.map((video, index) => {
        return (
          <a
            key={index}
            href={video}
            style={{
              textAlign: "center",
              textDecoration: "none",
              color: "white",
            }}
            target="_blank"
          >
            <div key={index} className="video-item">
              <PlayCircleIcon style={{ fontSize: "50px" }} />
            </div>
            <h1>{video.title}</h1>
          </a>
        );
      })}
    </div>
  );
};

export default VideoGallery;

{
  /* <Video autoPlay loop>
              <source src={video.url} type="video/mp4" />
            </Video> */
}
{
  /* <video width="320" height="240" controls>
              <source src='https://youtu.be/nLQ-9vfEjUI' type="video/mp4" />
            </video> */
}
{
  /* <img src={video.url} width='300px' height='300px' alt="videos" /> */
}
{
  /* <ReactPlayer playing={true} light={true} url='../videos/videoplayback.mp4' controls={true} width="100%" height="100%" /> */
}
{
  /* <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div> */
}

// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const VideoGallery = () => {
//   const [gallery, setGallery] = useState([
//     { id: 1, title: 'Video 1', url: '../videos/videoplayback(1).mp4' },
//     { id: 2, title: 'Video 2', url: '../videos/videoplayback(2).mp4' },
//     { id: 3, title: 'Video 3', url: '../videos/videoplayback(3).mp4' },
//     { id: 4, title: 'Video 4', url: '../videos/videoplayback.mp4' },
//   ]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     adaptiveHeight: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="video-gallery">
//       <Slider {...settings}>
//         {gallery.map((video) => (
//           <div key={video.id}>
//             <iframe src={video.url} width="100%" height="auto" frameborder="0" allowfullscreen title={video.title}></iframe>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default VideoGallery;
