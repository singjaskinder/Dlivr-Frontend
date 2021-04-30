import "./ScreenHeading.css"

function ScreenHeading(props){
    return(
        <div className="heading"> 
            <p>{props.heading}</p>
        </div>
    );
}



export default ScreenHeading;