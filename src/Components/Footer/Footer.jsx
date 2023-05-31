import './Footer.css'

function Footer(props) {

    return (
        <div className='main'>
            <div className='info__container'>
                <img className='info__image' src={props.images[0]} alt="" /> 
                <h5>2,500</h5>
                <h6>enterprise organisation successfully launched</h6>
                
            </div>
            <div className='info__container'>
                <img className='info__image' src={props.images[1]} alt="" /> 
                <h5>45,000</h5>
                <h6>enterprise users onboarder seamlessly</h6>
                
            </div>
            <div className='info__container'>
                <img className='info__image' src={props.images[2]} alt="" /> 
                <h5>200,000+</h5>
                <h6>professionals trained on product and strategy</h6>
                
            </div>
        </div>
    )


}
export default Footer