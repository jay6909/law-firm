import EmailInput from "../email-input"
import './hero-section.css'
export default () => {
    return (
        <div className="hero-section">
            <div style={{width:'50%', display:'flex', justifyContent:'center',gap:'20px', flexDirection:'column'}}>
                <div style={{width:'70%'}} >
                    <h1 style={{fontSize:'66px'}}>You don’t have to<br/>
                    Fight them Alone.</h1>
                </div>
                <p style={{color:'#838383', fontSize:'18px'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                <EmailInput/>

            </div>
            <div>
                2

            </div>
        </div>
    )
}