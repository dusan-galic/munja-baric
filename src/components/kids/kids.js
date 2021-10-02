import './kids.css';
import DztImageGalleryComponent from "reactjs-image-gallery";


const Kids = () => {
    var data = [
        {
          url: '../jevdja.jpg',   
          title: "Kayak",
          thumbUrl:
            "../jevdja.jpg"
        },
        {
            url: '../igraci.jpg',   
            title: "Kayak",
            thumbUrl:
              "../igraci.jpg" },
         {
             url: '../navijaci.jpg',   
            title: "Kayak",
            thumbUrl:
              "../navijaci.jpg" },
              {
                url: '../navijaci.jpg',   
               title: "Kayak",
               thumbUrl:
                 "../navijaci.jpg" } ,{
                    url: '../navijaci.jpg',   
                   title: "Kayak",
                   thumbUrl:
                     "../navijaci.jpg" } ,{
                        url: '../navijaci.jpg',   
                       title: "Kayak",
                       thumbUrl:
                         "../navijaci.jpg" } ,{
                            url: '../navijaci.jpg',   
                           title: "Kayak",
                           thumbUrl:
                             "../navijaci.jpg" } ,{
                                url: '../navijaci.jpg',   
                               title: "Kayak",
                               thumbUrl:
                                 "../navijaci.jpg" } ,{
                                    url: '../navijaci.jpg',   
                                   title: "Kayak",
                                   thumbUrl:
                                     "../navijaci.jpg" } ,{
                                        url: '../navijaci.jpg',   
                                       title: "Kayak",
                                       thumbUrl:
                                         "../navijaci.jpg" ,
                                       }  ]
    return (
        <div class= "kids">
        <DztImageGalleryComponent images={data} hideDownload={true} />
      </div>
    )
}

export default Kids;