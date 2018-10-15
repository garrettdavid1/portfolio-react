import React, {Component } from 'react';
import { styles } from './styles';

export default class Tab extends Component{

    state = {
        classes: 'tab',
        selected: false
    }

    componentWillReceiveProps(nextProps){
        this.setState({ classes: nextProps.selected ? 'tab visible selected' : 'tab unselected'})
    }

    render(){
        const {index, title} = this.props;
        const { classes } = this.state;
        const rightSpace = window.innerWidth * .175;
        const tabWidth = (window.innerWidth * .65) / 4;
        return (
            <div 
					className={classes}
					style={{...styles.tab, ...{right: rightSpace + (index * -tabWidth) + (tabWidth * 3), width: tabWidth}}}
					key={title.replace(/\s/g, '')}
                    onClick={this.onSelect}
				>
					<h3 style={{color: 'inherit', margin: 0}}>{title}</h3>
				</div>
        )
    }

    componentDidMount(){
        setTimeout(() => {
			this.setState({
                classes: 'tab visible'
            }, () => {
                setTimeout(() => {
                    this.setState({
                        classes: this.props.index === 0 ? 'tab selected' : 'tab unselected'
                    })
                }, 600)
            })
        }, this.props.index * 200);

        window.addEventListener('resize', () => {this.forceUpdate()});
    }

	getTabSlideUpHandler = (delay) => {
		setTimeout(() => {
			this.setState({
                classes: 'tab visible'
            })
		}, delay);
    }
    
    onSelect = () => {
        let {classes} = this.state;
        if(classes.indexOf('unselected') !== -1){
            this.setState({
                classes: ' tab selected'
            })
        }

        this.props.setSelectedTab(this.props.index);
    }
}