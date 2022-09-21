import React ,{useState} from 'react';
import AllData from './AllData'
import "../latest-project.css";
import { ImgOverlay } from 'image-overlay-react'
import 'image-overlay-react/dist/index.css'

function Latest() {

  const [images,setImage]  = useState(AllData)

  const allItem =()=>{
    const finalData = AllData.filter((value)=>{
      return value;
    })
    setImage(finalData)
  }

  const onlyPython =(categoryItem)=>{
    const finalData = AllData.filter((value)=>{
      return value.category == categoryItem
    })

    setImage(finalData)
  }
  const onlyOffice =(categoryItem)=>{
    const finalData = AllData.filter((value)=>{
      return value.category == categoryItem
    })

    setImage(finalData)
  }
  const onlyReact =(categoryItem)=>{
    const finalData = AllData.filter((value)=>{
      return value.category == categoryItem
    })
    setImage(finalData)
  }
  
  return (
    <>
    <div className="Main-Latest-Projects">
      <div className="latest-projects-heading">
        <h1>Latest Projects</h1>
      </div>
      <div className="latest-projects-content">
        <ul>
        <li onClick={allItem}>All</li>
        <li onClick={()=>onlyPython('Python')}>Web Development / Designing</li>
        <li onClick={()=>onlyOffice('Office')}>React JS Development</li>
        <li onClick={()=>onlyReact('React')}>WordPress Development</li>
        </ul>



    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {
          images.map((value)=>{
            return (
             <div className="col mt-3 image-control-latest-projects">
                <ImgOverlay
      imgSrc={value.image}
      className='img-fluid'
      bgColor='rgba(0,0,0,0.8)'
      position='pop'
      width='300px'
      height='200px'
      fColor='gray'
    >
      <div className="main-content-handle">
      <a href="/"><h3>Live Preview</h3></a>
      </div>
    </ImgOverlay>
             </div>
            );
          })
        }
      </div>
    </div>
    </div>
    </div>
    </>


  );
}

export default Latest;