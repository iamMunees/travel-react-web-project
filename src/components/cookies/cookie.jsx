import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function Cookies (){
    const [cookies ,setCookie]=useCookies(["cookieConsent"]);
    const {classes} =useStyles();
    const giveCookieConsent = () =>{
        setCookie("cookieConsent",true,{path:"/"});
    };
    cookies.cookieConsent

    return(
        <div className={classes.cookies}>
            <p>
                We use cookies to enhance your user experience.By using our website,you agree to our use of cookies.{""}
                <Link hreef={"/privacy-policy"}>Learn More</Link>
                <Button size="lg" onClick={giveCookieConsent}>
                    Accept
                </Button>
            </p>

        </div>
    )
}