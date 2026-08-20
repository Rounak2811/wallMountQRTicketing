import CRISImage from '../assets/CRIS_Image.jpeg'

function CRISFooter() {
    return (
        <>
            <img src={CRISImage} className="crisLogo"/>
            <h5 className="crisName">Centre for Railway Information Systems(CRIS)</h5>
            <h6>version 1.0</h6>
        </>
    )
}

export default CRISFooter;