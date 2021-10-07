import './galerija.css';
import DztImageGalleryComponent from "reactjs-image-gallery";

const Galerija = () => {
    var test = process.env.PUBLIC_URL
    var data = [
        {
          url: '../igraci.jpg',
          title: "Munja",
          thumbUrl:
          test + "/igraci.jpg" },
            
                 {
                  url: '/galerija/DSC_0068.jpg',   
                 title: "Munja",
                 thumbUrl:
                 test + "/galerija/DSC_0068.jpg" },
              {
                url: '../galerija/IMG_9971.jpg',   
               title: "Munja",
               thumbUrl:
               test + "/galerija/IMG_9971.jpg" } ,{
                    url: '../galerija/IMG_00J.jpeg',   
                   title: "Munja",
                   thumbUrl:
                   test + "/galerija/IMG_00J.jpeg" }, 
                     {
                      url: '../galerija/IMG_002.jpeg',   
                     title: "Munja",
                     thumbUrl:
                     test + "/galerija/IMG_002.jpeg" },
                       {
                        url: '../galerija/IMG_004.jpeg',   
                       title: "Munja",
                       thumbUrl:
                       test + "/galerija/IMG_004.jpeg" },
                         {
                          url: '../galerija/IMG_005.jpeg',   
                         title: "Munja",
                         thumbUrl:
                         test + "/galerija/IMG_005.jpeg" },
                           {
                            url: '../galerija/MAR_5317.jpg',   
                           title: "Munja",
                           thumbUrl:
                           test + "/galerija/MAR_5317.jpg" },
                             {
                              url: '../galerija/MAR_5366.jpg',   
                             title: "Munja",
                             thumbUrl:
                             test + "/galerija/MAR_5366.jpg" } ]
    
    return (
        <div className= "test">
        <DztImageGalleryComponent images={data} hideDownload={true} />
      </div>
    )
}

export default Galerija;