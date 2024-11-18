const ImageBlock = ({beforeImg, afterImg}) => {
 return ( 
    <div className="img-block">
    <img src={beforeImg} alt="" className="img-war-ba" />
        <img src={afterImg} alt="" className="img-war-ba" />
   </div> 
    );
}
 
export default ImageBlock;