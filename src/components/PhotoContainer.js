import React from 'react';

const PhotoContainer=({title,number})=>{
    const pictures=[];
    const byFour=number/4;
    console.log({title,number});
    let currentNumber=1;
for (let index = 0; index < 4; index++) {
    let index2=1
    const picture=[];
    while(index2<=byFour){

        picture.push(<img loading="lazy" key={currentNumber} src={window.location.origin+`/images/${title}/${title+currentNumber}.jpg`} alt={title+ "image"+currentNumber}/>);
        currentNumber++;
        index2++;
    }   
    pictures.push(picture)
} 
    console.log(pictures);

    return(
    <>
    <div className="title" key={title} id={title}> <span>{title}</span></div>
    <div className="container">
        {

                 pictures.map((picture,index)=> (
                    <div className="column" id={title}>
                        {
                            picture.map((item,index2)=>item)
                        }
                 </div>
                 )) 
            
        }
    </div>
    </>
    );
}

export default PhotoContainer;