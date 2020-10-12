import React,{Component} from 'react';
import classes from './Drover.module.css'
import {NavLink} from 'react-router-dom'
import BackDrop from '../../UI/BackDrop/BackDrop'

const links = [
    {to:'/', label: 'List', exact: true},
    {to:'/auth', label: 'Autorization', exact: false},
    {to:'/quiz-creator', label: 'Create test', exact: false},
]

class Drover extends Component {
    clickHandler=()=>{
        this.props.onClose()
    }
    renderLinks(){
        return links.map((link,index)=>{
            return (
                <li key={index}>
                    <NavLink
                    to={link.to}
                    exact={link.exact}
                    activeClassName={classes.active}
                    onClick={this.clickHandler}
                    >
                    {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    render(){
        const cls = [classes.Drover]
        if(!this.props.isOpen){
            cls.push(classes.close)
        }
        return(
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen?<BackDrop  onClick={this.props.onClose}/>:null }
            </React.Fragment>
        )
    }
}
export default Drover