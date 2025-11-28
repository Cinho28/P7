import "./Banner.scss";


function Banner({imageBanner , text}) {
    return (  
    <div className="banner">
      <img src={imageBanner} alt="" className="banner__picture" />
      <div className="banner__overlay"></div>
      {text && <h1 className="banner__text">{text}</h1>}
  </div>

);
}
export default Banner;