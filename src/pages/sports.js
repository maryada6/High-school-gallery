import React from 'react';
import PhotoContainer from '../components/PhotoContainer'
import {memory} from "../components/data"
const Sports=()=>{
    
    return  <PhotoContainer title={memory[2].title} number={memory[2].number} />;
          
}

export default Sports;