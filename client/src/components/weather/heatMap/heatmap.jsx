import { Component } from "react";
import './heatmap.css'

class HeatMap extends Component{

    componentDidMount(){
        fetch(`https://tile.openweathermap.org/map/temp_new/${16}/${2}/${2}.png?appid=${import.meta.env.VITE_API_KEY}`, {mode: "cors"})
            .then(res => res.json())
            .then(data => console.log(data))
    }

    render(){
       return(
            <div>
                
            </div>
       )
    }
}

export default HeatMap