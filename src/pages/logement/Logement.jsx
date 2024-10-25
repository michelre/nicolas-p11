import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rate from "../../components/rate/Rate";
import Carousel from "../../components/carousel/Carousel";
import Tag from "../../components/tag/Tag";

import './logement.scss'

const Logement = () => {

    const params = useParams()
    const [logement, setLogement] = useState()

    useEffect(() => {
        (async () => {
            const resp = await fetch('/logements.json')    
            const logements = await resp.json()

            const foundLogement = logements.find(l => l.id === params.id)
            setLogement(foundLogement)
        
        })()
    }, [])

    if(!logement){
        return null
    }

    return <>
        <Carousel 
            pictures={logement.pictures}
        />
        <h1>{logement.title}</h1>       
        <div className="logement-details">
            <ul className="tags">
                {logement.tags.map(tag => <li key={tag}>
                    <Tag name={tag}/>
                </li>)}
            </ul>
            <Rate rating={logement.rating}/>
        </div> 

    
    
    </>
}

export default Logement;