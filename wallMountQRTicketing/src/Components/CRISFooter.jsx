import CRISImage from '../assets/CRIS_Image.jpeg'

function CRISFooter() {
    return (
        <>
            <img src={CRISImage} className="crisLogo" />
            <div className="crisName">
                <h5>Centre for Railway Information Systems(CRIS)</h5>
                <h6>version 1.0</h6>
            </div>
        </>
    )
}

export default CRISFooter;