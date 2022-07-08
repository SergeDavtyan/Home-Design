import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "./Works.css";

import P1 from "../../assetc/images/p1.jpg";
import P2 from "../../assetc/images/p2.jpg";

const Works = () => {

  const [list, setList] = useState([
    {
      isActive: true,
      text: "All"
    },
    {
      isActive: false,
      text: "Interior"
    },
    {
      isActive: false,
      text: "Videos"
    },
    {
      isActive: false,
      text: "Industrial Design"
    },
    {
      isActive: false,
      text: "Portfolio"
    }
  ])

  const [masonryIMG, setMasonryIMG] = useState([
    {
      name: "https://picsum.photos/200/300",
      alt: "III",
      filter: "interior"
    },
    {
      name: "https://picsum.photos/400/400",
      alt: "III",
      filter: "interior"
    },
    {
      name: "https://picsum.photos/600/400",
      alt: "III",
      filter: "videos"
    },
    {
      name: "https://picsum.photos/200/200",
      alt: "III",
      filter: "videos"
    },
    {
      name: "https://picsum.photos/500/400",
      alt: "III",
      filter: "Industrial Design"
    },
    {
      name: "https://picsum.photos/400/600",
      alt: "III",
      filter: "Industrial Design"
    },
    {
      name: "https://picsum.photos/200/300",
      alt: "III",
      filter: "portfolio"
    },
    {
      name: "https://picsum.photos/300/600",
      alt: "III",
      filter: "portfolio"
    },
    {
      name: "https://picsum.photos/300/300",
      alt: "III",
      filter: "interior"
    },
    {
      name: "https://picsum.photos/200/200",
      alt: "III",
      filter: "interior"
    }
  ])

  // Image Filter START
  const [imagesFilter, setImagesFilter] = useState([]);

  const handleFilter = e => {
    e.target.innerText.toLowerCase() === "all" ? setImagesFilter(masonryIMG) : setImagesFilter(masonryIMG.filter(images => images.filter == e.target.innerText.toLowerCase()))
  }
  // Image Filter END

  useEffect(() => {
    return setImagesFilter(masonryIMG);
  }, [])

  // MENU STYLE START
  const handlerMenu = (i) => {
    list.map(f => f.isActive = false)
    list[i].isActive = true
    setList(list)
    console.log(list)
  }
  // MENU STYLE END
  
  
  const listItem = list.map((e,i) => {
    return <li onClick={r => {
      handleFilter(r)
      handlerMenu(i)
    }} className={e.isActive ? 'work-list__item active': 'work-list__item'} key={i}>{e.text}</li>
  })


  const [modal, setModal] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  };

  const imageDate = [
    {
      name: P1,
      alt: "P1"
    },
    {
      name: P2,
      alt: "P2"
    }
  ]
 
  const handleClick = e => {
    if(e.target.className == "modal") {
      setModal(false)
    }
    
  }


  return (
    <div className='works container'>

      <ul className="work-list">
        {listItem}
      </ul>

      <div className='masonry'>
          {imagesFilter.map((e,i) => {
            return <img onClick={() => setModal(true)} src={e.name} alt={e.alt} key={i} />
          })}
      </div>

      {modal ? <div onClick={e => handleClick(e)} className="modal">

          <div className="slider">

            <Slider {...settings}>
            {imageDate.map((e,i) => {
              return <div className='item' key={i}><img src={e.name} alt={e.alt} /></div>
            })}
            </Slider>

          </div>

      </div> : null}

    </div>
  )
}

export default Works;