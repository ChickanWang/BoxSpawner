import React, { useState } from 'react';
import { ChromePicker } from 'react-color'
import './App.css'

function Form() {
    const [dimensions, setDimensions] = useState({width: 100, height: 100});
    const [color, setColor] = useState({rgb: {r: 0, g: 0, b: 0}});
    const [box, setBox] = useState(false);

    var rgb = "rgb(" + color.rgb.r + ", " + color.rgb.g + ", " + color.rgb.b + ")"

    const changeDimensions = (e) => {

        setDimensions({...dimensions, [e.target.name] : e.target.value})
    }

    const changeColor = (color, e) => {
        setColor({
            ...color,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        setBox(!box);
    }

    return (
    <div> 
        {box ? 

        <div>
            <div style={{width: parseInt(dimensions.width), height: parseInt(dimensions.height), background: rgb}}></div>
            <br></br>
            <button onClick={handleSubmit} type="submit" class="btn btn-primary" >Create Another Box!</button>
        </div> :

        <form onSubmit={handleSubmit}>
            <h3>Box Settings:</h3>
            <div class="col-md-8 col-s-12">
                <div class="form-group">
                    <label for="BoxWidth">Box Width (Pixels)</label>
                    <input name="width" type="number" min="0" max="9999" class="form-control" id="BoxWidth" placeholder="Enter width" value={dimensions.width} onChange={changeDimensions}></input>
                </div>
                <div class="form-group">
                    <label for="BoxHeight">Box Height (Pixels)</label>
                    <input name="height" type="number" min="0" max="9999" class="form-control" id="BoxHeight" placeholder="Enter height" value={dimensions.height} onChange={changeDimensions}></input>
                </div>
                <div class="form-group col-2 input-lg">
                    <label for="Color">Color</label>
                    <ChromePicker color={color} onChange={changeColor}/>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary" >Create Box</button>
            </div>
        </form>}
    </div>
    );
}

export default Form;