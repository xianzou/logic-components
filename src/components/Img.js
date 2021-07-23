import '../styles/img.css';
import React from 'react';

export const Img = ({ src,alt,errorImg,...props }) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            loading="lazy" 
            onError={
                e =>{
                    e.target.onerror = null;
                    if(errorImg){
                        e.target.src = errorImg; 
                    }else{
                        e.target.classList.add('x-img-error')
                    }
                }
            } 
            {...props} 
        />
    )
}