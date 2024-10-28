import './accordeon.scss'
import ArrowUp from '../../assets/arrow-up.svg'
import { useRef, useState } from 'react'

const Accordeon = ({title, children}) => {

    const [open, setOpen] = useState(false)
    const accordeonContentRef = useRef(null)

    const onOpen = () => {
        setOpen(!open)
    }

    const getAccordeonContentHeight = () => {
        if(open){
            return `${accordeonContentRef?.current?.clientHeight}px`
        }
        return 0
    }


    return <div className={`accordeon ${open ? 'open' : ''}`}>
        <div className="accordeon-title">
            <span>{title}</span>
            <button onClick={onOpen}>
                <img src={ArrowUp} alt="Ouvrir l'accordéon" />
            </button>            
        </div>
        <div className="accordeon-content" style={{height: getAccordeonContentHeight()}}>
            <div className="accordeon-children" ref={accordeonContentRef}>
                {children}
            </div>            
        </div>
    </div>
}

export default Accordeon