import "./Calculadora.css"
import React from "react"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



function Calculadora (){
    const [KgTotalBolsa, setKgTotalBolsa] = React.useState("");
    const [NumComidasXDia, setNumComidasXDia] = React.useState("");
    const [GramosXRación, setGramosXRación] = React.useState("");
    const [ResultadoCalculo, setResultadoCalculo] = React.useState(Number);
  

    return(
        <div>
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-number"
                    label="Total Kg Bolsa Comida"
                    type="number"
                    value={KgTotalBolsa}
                    color="secondary"
                    focused
                    onChange={(trigger:React.ChangeEvent<HTMLInputElement>) => {
                        setKgTotalBolsa(trigger.target.value);
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-number"
                    label="Nº de comidas al día"
                    type="number"
                    color="secondary"
                    focused
                    value={NumComidasXDia}
                    onChange={(trigger:React.ChangeEvent<HTMLInputElement>) => {
                        setNumComidasXDia(trigger.target.value)
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-number"
                    label="g por porción"
                    type="number"
                    color="secondary"
                    focused
                    value={GramosXRación}
                    onChange={(trigger: React.ChangeEvent<HTMLInputElement>)=>
                        setGramosXRación(trigger.target.value)
                    }
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
            <Button 
                color="secondary"
                
                onClick={()=>{
                    const CalculoDecimal = (((parseFloat(KgTotalBolsa)*1000)/(parseFloat(GramosXRación)))/(parseInt(NumComidasXDia)));
                    setResultadoCalculo(Math.round(CalculoDecimal))
                    console.log(ResultadoCalculo)
                }} 
                variant="contained">Calcular
            </Button>
            <p id="Texto">La comida de tu mascota va a durar: {ResultadoCalculo} días</p>
        </div>
    )
}
export default Calculadora;