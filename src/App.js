import React from 'react';
import './App.css'

const data=[
  {imgUrl:"https://i.ibb.co/wz4NMM9/14.jpg"},
  {imgUrl:"https://i.ibb.co/XkqK1s1/17.jpg"},
  {imgUrl:"https://i.ibb.co/59M2Pfv/18.jpg"},
  {imgUrl:"ttps://i.ibb.co/SKppSgq/19.jpg"},
  {imgUrl:"https://i.ibb.co/jVRzr3v/13.jpg"},
  {imgUrl:"https://i.ibb.co/RTMqQkx/1.jpg"},
  {imgUrl:"https://i.ibb.co/g4wRC8Y/2.jpg"},
  {imgUrl:"https://i.ibb.co/zNcVG2B/3.jpg"},
  {imgUrl:"https://i.ibb.co/vjCC24P/4.jpg"},
  {imgUrl:"https://i.ibb.co/h7YYBT7/5.jpg"},
  {imgUrl:"https://i.ibb.co/9wjw31g/6.jpg"},
  {imgUrl:"https://i.ibb.co/VjVjHG0/7.jpg"},
  {imgUrl:"https://i.ibb.co/KFHNVLH/8.jpg"},
  {imgUrl:"https://i.ibb.co/zXXpmg2/9.jpg"},
  {imgUrl:"https://i.ibb.co/4JRqgtq/10.jpg"},
  {imgUrl:"https://i.ibb.co/dJSZ5QJ/11.jpg"},
  {imgUrl:"https://i.ibb.co/1ZTzsx8/12.jpg"}
]

const App1 = () => {
  return (
    <div>
      <h1 className='heading'>My Recent Clicks</h1>,
    <div className='movie'>
      
      {
        data.map((eachobj)=>{
          const {imgUrl}=eachobj;
          return <Movie imgUrl={imgUrl}/>
        })
      }
    </div>
    </div>
  )
}

const Movie=(props)=>{
  return(
    <section className='eachmovie'>
      <img src={props.imgUrl} alt="hi"/>
      
    </section>
  )
}

export default App1;