import { Component } from "react"
import {Box, Grid, Typography} from '@mui/material'

import NavigationIcon from '@mui/icons-material/Navigation';
import DeviceThermostatSharpIcon from '@mui/icons-material/DeviceThermostatSharp';

import formatDate from "../../utils/formatDate";
import formatUnit from "../../utils/weather/formatTemp";
import getDirection from "../../utils/weather/windDirection";

class CurrentWeather extends Component{    
    render(){
        console.log('current component updated')
        const {current: d, location, timezone, unit} = this.props
        const prop = {fontSize: 14, color:'#232323'}
       
        return(   
            <Box>
                <Typography
                    fontSize={14}
                    color="error"
                    mb={0.5}
                >
                    {formatDate(d.dt, true, true, timezone)}    
                </Typography>                
                
                <Typography
                    fontSize={28}
                    color='#232323'
                    fontWeight={500}
                    mb={2}
                >
                    {`${location.city}, ${location.country}`}
                </Typography>

                <Box
                    display="flex"
                    alignItems="center"
                >
                    <Box
                        component="img"
                        alt="icon"
                        src={`https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}
                        sx={{
                            width: 70,
                            marginRight: 2,
                        }}
                    >
                    </Box>
                    <Typography
                        fontSize={42}
                        color='#232323'
                    >
                        {formatUnit(d.temp, unit, 'TEMP')} &deg;{unit==='M' ? 'C' : 'F'}
                    </Typography>
                </Box>
                
                <Box
                    display="flex"
                    mb={1}
                >
                    <Typography
                        fontWeight={500}
                        sx={{
                            "&::after":{
                                content: '" | "',
                            }
                        }}
                        color='#232323'
                    >
                        Feels like {formatUnit(d.feels_like, unit, 'TEMP')} &deg;{unit==='M' ? 'C' : 'F'}
                    </Typography>
                    <Typography
                        fontWeight={500}
                    >
                        &nbsp;{d.weather[0].description}
                    </Typography>
                </Box>
                
                <Grid container rowGap={{xs:0.75, md:0.25}} sx={{borderLeft:'1px solid crimson', pl:3, width:{xs:'85%', lg:'90%'}}}>
                    <Grid xs={6} item display="flex" alignItems="center">
                        <NavigationIcon
                            sx={{
                                fontSize:16,
                                mr: 1,
                                color:'#444',
                                transform: `rotate(${180 + d.wind_deg}deg)`
                            }}
                        />
                        <Typography sx={prop}>
                            {formatUnit(d.wind_speed, unit, 'SPEED')} {unit==='M'?'m/s':'mph'} {getDirection(d.wind_deg)}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} display="flex" alignItems="center">
                        <DeviceThermostatSharpIcon
                            sx={{
                                fontSize:16,
                                mr:1,
                                color:'#444'
                            }}
                        />
                        <Typography sx={prop}>
                            {formatUnit(d.pressure, unit, 'PRESSURE')} {unit==='M'?'hPa':'psi'}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={prop}>
                            Humidity: {d.humidity}%
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={prop}>
                            UV: {d.uvi}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={prop}>
                            Dew point: {formatUnit(d.dew_point, unit, 'TEMP')} <span>&deg;</span>{unit==='M'?'C':'F'}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={prop}>
                            Visibility: {formatUnit(d.visibility, unit, 'DISTANCE')/1000} {unit==='M'?'km':'miles'}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default CurrentWeather