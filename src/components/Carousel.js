

import React from "react";
import {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slides () {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
   
        return (
          
            <div>
                <h2>My Image Gallery</h2>
                <input value="Slider" name="Slider"  type="checkbox" checked={isChecked}
          onChange={handleOnChange}/> Slider
          {
              isChecked? (
                  <>
                  <Carousel autoPlay interval="3000"  infiniteLoop>
                    <div>
                        <img src="https://picsum.photos/500/200?img=1" />
                        
                    </div>
                    <div>
                        <img src="https://picsum.photos/500/200?img=2" />
                        
                    </div>
                    <div>
                        <img src="https://picsum.photos/500/200?img=3" />
                       
                    </div>
                </Carousel>
                </>

              ) : (
                  <>
                  <Carousel infiniteLoop>
                    <div>
                        <img src="https://picsum.photos/500/200?img=1" />
                        
                    </div>
                    <div>
                        <img src="https://picsum.photos/500/200?img=2" />
                        
                    </div>
                    <div>
                        <img src="https://picsum.photos/500/200?img=3" />
                       
                    </div>
                </Carousel>
                </>

              )
          }
               
            </div>
        )
    };
   

