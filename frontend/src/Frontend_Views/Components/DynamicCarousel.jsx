import React from "react";
import "./DynamicCarousel.css";
import { getImagePath } from "../../util/commonUtil";
import RichTextView from "../../Common/RichTextView";

const DCarousel = ({ obj, all, closeCarousel }) => {

  // contentType, category, path, image_title, image_description
  

  const findImg = all.find((item) => item.id === obj.id);
  const imgs = [findImg, ...all];
    
  const uniqueImgsArray = imgs.filter(function (item, pos) {
    return imgs.indexOf(item) === pos;
  });

  console.log(uniqueImgsArray, "Video Obj")

  return (
    <div
      id="carouselExampleIndicators"
      className="dcarousel carousel slide shadow-lg"
      data-bs-ride="carousel"
    >
      <span
        className="closeCarousel"
        onClick={closeCarousel}
        onBlur={closeCarousel}
      >
        <i className="fa fa-times fs-4" aria-hidden="true"></i>
      </span>
      <div className="carousel-inner">
        {uniqueImgsArray.length > 0
          ? uniqueImgsArray.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""} ${item.contentType == ".mp4" ||  item.category == "VideosGallery" ? "videoGallery" : "imageGallery"}`}
                key={item.id}
              >
                <div className="imgContainer d-flex justify-content-center align-items-center">
                  {item.contentType == ".mp4" ||  item.category == "VideosGallery" ? (
                    <video
                      width="100%"
                      height="740"
                      controls
                      className="d-block w-75"
                    >
                      <source
                        src={getImagePath(item.path)}
                        type={`video/${item.contentType
                          .replace(".", "")
                          .toUpperCase()}`}
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (<img
                    src={getImagePath(item?.path)}
                    alt={item.alternitivetext}
                    className="d-block img-fluid"
                  />)}
                </div>
                <div className="imgInfo">
                  {item?.image_title ||
                    (item?.client_title && (
                      <h5
                        className=" w-100 py-2 fs-4 text-center d-block"
                        style={{}}
                      >
                        {item?.image_title || item?.client_title}
                      </h5>
                    ))}
                  {item?.image_description ||
                    (item?.client_description && (
                      // <p
                      //   className=" w-100 px-0 text-center"
                      //   style={{

                      //   }}
                      // >
                      //   {item?.image_description}
                      // </p>
                      <RichTextView
                        data={
                          item?.image_description || item?.client_description
                        }
                        className={" w-100 px-0 text-center"}
                        showMorelink={false}
                      />
                    ))}
                </div>
              </div>
            ))
          : null}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default DCarousel;
