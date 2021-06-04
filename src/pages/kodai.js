import React from 'react';
import PhotoContainer from '../components/PhotoContainer'
import {memory} from "../components/data"
const Kodai=()=>{
    
    return  <PhotoContainer title={memory[0].title} number={memory[0].number} />;
          
}

export default Kodai;