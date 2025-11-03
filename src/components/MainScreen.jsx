import "./../assets/scss/MainScreen.scss";
// import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function MainScreen({ config, solved }) {
  return <div className="frame">
    <div className="containerLogin">
<div className="imgAvatar"></div>
<h2>Name of user</h2>
<input class="input" name="text" placeholder="Search..." type="search"></input>
 <p> I forgot my PIN</p>
 </div> 
 
 <div className="footer">
  {/* <PowerSettingsNewIcon/> */}
  <i>accesibilidad</i>
  <i>login</i>
 </div>
 </div>;
}
