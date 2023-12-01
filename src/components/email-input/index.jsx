import './email-input.css'
import { ReactComponent as MailIcon } from './mail-icon.svg'
export default () => {
    return (
        <div style={{ position: 'relative' }}>
            <form style={{ display: "flex", width: "630px" }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: '30px', backgroundColor: '#2E2E2E', padding: '6px' }}>
                <div style={{ marginLeft:'10px',height: '20px', width: '20px' }}>
                            <MailIcon />
                        </div> 
                    <div style={{flex:'1', flexDirection:'row', marginLeft:'10px', textAlign:'center'}}>
                        <input className="input" type="text" placeholder="Enter your eamil address" /></div>
                    <div><button style={{ width: '137px', height: '62px', borderRadius: '30px', backgroundColor: 'var(--css-primary)', cursor: 'pointer' }}>Let's Talk</button></div>
                </div>

            </form>
        </div>
    )
}