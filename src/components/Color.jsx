import React,{useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from '@material-ui/core/Button';
import DialogContent from "@material-ui/core/DialogContent";
import {BlockPicker,HuePicker} from 'react-color'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

function NavColor(){
    const c = getComputedStyle(document.querySelector(':root')).getPropertyValue('--heading');
    console.log(c.hex);
    const [color, setColor] = useState(c);
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (<div className="color-picker">
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                <FontAwesomeIcon icon={faPalette}/>
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                <p>JUST FOR FUN</p>
                            <BlockPicker
                            color={color}
                            onChangeComplete={color => {
                            setColor(color.hex);
                            document.querySelector(':root').style.setProperty('--heading', color.hex);
                            }}/>
                            <HuePicker
                            color={color}
                            onChangeComplete={color => {
                            setColor(color.hex);
                            document.querySelector(':root').style.setProperty('--heading', color.hex);
                            }}/>
                    </DialogContent>
                </Dialog>
            </div>);
  };

  function MobColor(){
    const c = getComputedStyle(document.querySelector(':root')).getPropertyValue('--heading');
    console.log(c.hex);
    const [color, setColor] = useState(c);
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (<div className="picker">
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                <FontAwesomeIcon icon={faPalette}/>
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                <p>JUST FOR FUN</p>
                            <HuePicker
                            color={color}
                            onChangeComplete={color => {
                            setColor(color.hex);
                            document.querySelector(':root').style.setProperty('--heading', color.hex);
                            }}/>
                    </DialogContent>
                </Dialog>
            </div>);
  };

export {NavColor,MobColor};