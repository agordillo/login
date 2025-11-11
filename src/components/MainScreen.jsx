import "./../assets/scss/MainScreen.scss";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WifiIcon from '@mui/icons-material/Wifi';

export default function MainScreen({ config, solved }) {
  return <div className="frame">
    <div className="containerLogin">
<div className="imgAvatar"></div>
<h2 className="userName">Name of user</h2>
<input class="input" type="password" placeholder="" ></input>
 <p className="forgotPIN"> I forgot my PIN</p>
 </div> 
 
 <div className="footer">
 <WifiIcon sx={{fontSize: 20}}/>
<AccessibilityNewIcon sx={{fontSize: 20}}/>
   <PowerSettingsNewIcon sx={{fontSize: 20}}/>
 </div>
 </div>;
}
