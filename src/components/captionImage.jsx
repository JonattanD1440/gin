import React from "react";

const CaptionImage = props => {
  const { items } = props;
  const openLink = url => {
    if (!url) return null;
    let isExternalLink = url.charAt(0) === "/" ? "_self" : "_blank";
    return url ? window.open(url, isExternalLink) : null;
  };
  return (
    <div className="row">
      {items.map((item, index) => (
        <div
          className={
            "col-md-6 rouded shadow-sm p-0 image-item bg-dark" +
            (item.url ? " pointer " : "")
          }
          onClick={() => openLink(item.url)}
          key={index}
        >
          <div className="image-caption position-absolute">
            <div className="mt-5 p-3 ">
              <h2 className="mb-3 caption-title">&rsaquo; {item.title}</h2>
              <span className="description">{item.description}</span>
            </div>
          </div>
          {item.image ? (
            <img
              className="img-responsive m-0 position-relative shadow-md filter"
              src={item.image}
              alt=""
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default CaptionImage;
