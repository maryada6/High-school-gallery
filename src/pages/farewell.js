import React from 'react';
import PhotoContainer from '../components/PhotoContainer'
import {memory} from "../components/data"
const Farewell=()=>{
    
    return  <PhotoContainer title={memory[3].title} number={memory[3].number} />;
          
}

export default Farewell;