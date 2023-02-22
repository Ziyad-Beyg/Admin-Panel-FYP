import React from "react";
import "../index.css";


const images = [
  "https://www.bentleymotors.com/content/dam/bentley/Master/World%20of%20Bentley/Mulliner/redesign/coachbuilt/Mulliner%20Batur%201920x1080.jpg/_jcr_content/renditions/original.image_file.700.394.file/Mulliner%20Batur%201920x1080.jpg",
  "https://imgd.aeplcdn.com/0x0/n/cw/ec/106785/exterior-right-front-three-quarter-2.jpeg?isig=0",
  "https://carsales.pxcrush.net/carsales//car/dealer/4b6a21c7fbf14bdda32a18170049e71d.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480",
  "https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-2180c3d181555154d1bc13ffbbf05f29.jpg",
  "https://images.unsplash.com/photo-1635975229704-0a420e777a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  "https://media.zigcdn.com/media/content/2021/Jun/chironsstitle_640x480.jpg",
];

function ImageGallery() {
  let data = JSON.parse(localStorage.getItem("Vendor"));


  return (
    // <div className="image-gallery">
    //   <div className="row">
    //     <div className="col">
    //       <img
    //         src="https://www.bentleymotors.com/content/dam/bentley/Master/World%20of%20Bentley/Mulliner/redesign/coachbuilt/Mulliner%20Batur%201920x1080.jpg/_jcr_content/renditions/original.image_file.700.394.file/Mulliner%20Batur%201920x1080.jpg"
    //         alt="Image 1"
    //       />
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col">
    //       <img
    //         src="https://imgd.aeplcdn.com/0x0/n/cw/ec/106785/exterior-right-front-three-quarter-2.jpeg?isig=0"
    //         alt="Image 2"
    //       />
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col">
    //       <img
    //         src="https://carsales.pxcrush.net/carsales//car/dealer/4b6a21c7fbf14bdda32a18170049e71d.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480"
    //         alt="Image 3"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="image-gallery">
      {data.imgaes.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>







  );
}

export default ImageGallery;
