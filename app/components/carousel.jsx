import card from "./card";
import Slider from "react-slick";
import '@/style/carousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{  backgroundColor:'rgba(128, 128, 128, 0.671)', width:'40px', height:'40px', borderRadius:'50%' ,zIndex: '4', display:'flex', justifyContent:'center', alignItems:'center' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ backgroundColor:'rgba(128, 128, 128, 0.671)', width:'40px', height:'40px', borderRadius:'50%' ,zIndex: '4', display:'flex', justifyContent:'center', alignItems:'center' }}
        onClick={onClick}
      />
    );
  }

export default function carousel(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 0
            }
          }
        ]
    }
        return (

            <div className="carousel mx-16">
                <Slider {...settings}>{
                data.map((d , index)=>(
                card()
          ))}
            
          </Slider>
                
            </div>

                

            
         
        );
}

const data = [
    {
        tile:'Card 01',
        image:'/demoImage.jpg',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias harum deserunt voluptatibus totam voluptates laboriosam? Hic consequatur, quaerat nam sit dolorum voluptates? Maiores ipsam rem excepturi qui, cum enim.'
    },
    {
        tile:'Card 02',
        image:'/demoImage.jpg',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias harum deserunt voluptatibus totam voluptates laboriosam? Hic consequatur, quaerat nam sit dolorum voluptates? Maiores ipsam rem excepturi qui, cum enim.'
    },
    {
        tile:'Card 03',
        image:'/demoImage.jpg',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias harum deserunt voluptatibus totam voluptates laboriosam? Hic consequatur, quaerat nam sit dolorum voluptates? Maiores ipsam rem excepturi qui, cum enim.'
    },
    {
        tile:'Card 04',
        image:'/demoImage.jpg',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias harum deserunt voluptatibus totam voluptates laboriosam? Hic consequatur, quaerat nam sit dolorum voluptates? Maiores ipsam rem excepturi qui, cum enim.'
    },
    {
        tile:'Card 05',
        image:'/demoImage.jpg',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias harum deserunt voluptatibus totam voluptates laboriosam? Hic consequatur, quaerat nam sit dolorum voluptates? Maiores ipsam rem excepturi qui, cum enim.'
    },
    {
        tile:'Card 06',
        image:'/demoImage.jpg',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit alias harum deserunt voluptatibus totam voluptates laboriosam? Hic consequatur, quaerat nam sit dolorum voluptates? Maiores ipsam rem excepturi qui, cum enim.'
    },
]