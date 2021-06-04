import React from 'react';
import PhotoContainer from '../components/PhotoContainer'
import {memory} from "../components/data"
const Kadam=()=>{
    
    return  <PhotoContainer title={memory[1].title} number={memory[1].number} />;
          
}

export default Kadam;