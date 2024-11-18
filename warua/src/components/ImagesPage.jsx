import ImageBlock from "./ImageBlock"
import before6 from "../assets/before6.jpg"
import after6 from "../assets/after6.jpg"
import before1 from "../assets/before1.jpg"
import after1 from "../assets/after1.jpg"
import before2 from "../assets/before2.jpg"
import after2 from "../assets/after2.jpg"
import before3 from "../assets/before3.jpg"
import after3 from "../assets/after3.jpg"
import before4 from "../assets/before4.jpg"
import after4 from "../assets/after4.jpg"
import before5 from "../assets/before5.jpg"
import after5 from "../assets/after5.jpg"
const ImagesPage = () => {
    return ( <>
    <h2 className="title-images"> rUSSLAND GØR ALT DETTE <span>LIGE NU</span></h2>
    <ImageBlock beforeImg={before6} afterImg={after6}></ImageBlock>
    <ImageBlock beforeImg={before1} afterImg={after1}></ImageBlock>
    <ImageBlock beforeImg={before2} afterImg={after2}></ImageBlock>
    <ImageBlock beforeImg={before3} afterImg={after3}></ImageBlock>
    <ImageBlock beforeImg={before4} afterImg={after4}></ImageBlock>
    <ImageBlock beforeImg={before5} afterImg={after5}></ImageBlock>
    </> );
}
 
export default ImagesPage;