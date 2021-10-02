import './galerija.css';
import DztImageGalleryComponent from "reactjs-image-gallery";

const Galerija = () => {
    var data = [
        {
            url: '../igraci.jpg',   
            title: "Kayak",
            thumbUrl:
              "../igraci.jpg" },
            
                 {
                  url: '../galerija/DSC_0068.jpg',   
                 title: "Kayak",
                 thumbUrl:
                   "../galerija/DSC_0068.jpg" },
              {
                url: '../galerija/IMG_9971.jpg',   
               title: "Kayak",
               thumbUrl:
                 "../galerija/IMG_9971.jpg" } ,{
                    url: '../galerija/IMG_00J.jpeg',   
                   title: "Kayak",
                   thumbUrl:
                     "../galerija/IMG_00J.jpeg" }, 
                     {
                      url: '../galerija/IMG_002.jpeg',   
                     title: "Kayak",
                     thumbUrl:
                       "../galerija/IMG_002.jpeg" },
                       {
                        url: '../galerija/IMG_004.jpeg',   
                       title: "Kayak",
                       thumbUrl:
                         "../galerija/IMG_004.jpeg" },
                         {
                          url: '../galerija/IMG_005.jpeg',   
                         title: "Kayak",
                         thumbUrl:
                           "../galerija/IMG_005.jpeg" },
                           {
                            url: '../galerija/MAR_5317.jpg',   
                           title: "Kayak",
                           thumbUrl:
                             "../galerija/MAR_5317.jpg" },
                             {
                              url: '../galerija/MAR_5366.jpg',   
                             title: "Kayak",
                             thumbUrl:
                               "../galerija/MAR_5366.jpg" } ]
    
    return (
        <div className= "test">
        <DztImageGalleryComponent images={data} hideDownload={true} />
      </div>
    )
}

export default Galerija;