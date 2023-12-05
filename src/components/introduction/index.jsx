
import './intro-section.css'
export default () => {
    return (
        <div className="intro-section">
            <div style={{ width: '50%', display: 'flex', justifyContent: 'center', gap: '20px', flexDirection: 'column' }}>
                <h2 style={{ fontSize: '52px' }}>Let’s Introduce
                    Ourself</h2>

            </div>
            <span style={{ border: '2px solid #6A6A6A' }}></span>
            <div style={{ width: '50%',marginLeft:'60px' , display: 'flex', justifyContent: 'center', gap: '20px', alignItems:'center',flexDirection: 'column' }}>
                <div><h2>Criminal Lawyer</h2>
                <p>Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint. Velit officia consequatduis
                    enim velit mollit Exercitation.</p></div>
            </div>
        </div>
    )
}