import React from 'react';

class Font extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 16,
        }
    }
    
    add = () => {
        this.setState((state) => {
            return state.count++
        })
        
    }

    sub = () => {
        this.setState((state) => {
            return state.count--
        })
        
    }

    render() {
        document.getElementById('root').style.fontSize = `${this.state.count}px`
        return (
            <div>
                <div>
                    <div className="btn-container">
                        <button className="btn" onClick={this.add}>+ 1</button>
                        <button className="btn" onClick={this.sub}>- 1</button>
                    </div>
                </div>
            </div>

        )

    }
}

export default Font;
