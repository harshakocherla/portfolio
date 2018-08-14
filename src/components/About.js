import React, { Component } from 'react';

import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedValueFromLeft: new Animated.Value(0),
    };
  }

  componentWillMount() {
    this.state.animatedValueFromLeft.setValue(0);
    Animated.timing(this.state.animatedValueFromLeft, {
      toValue: 1,
      duration: 1000,
      easing: Easing.elastic(1),
    }).start();
  }

  animateToRight = () => {
    this.animatedValueToRight.setValue(1);
    Animated.timing(this.animatedValueToRight, {
      toValue: 0,
      duration: 1000,
      easing: Easing.elastic(1),
    }).start();
  };


  render() {
    const marginLeft = this.state.animatedValueFromLeft.interpolate({
      inputRange: [0, 1],
      outputRange: [-120, 0],
    });
    return (
      <Animated.div
        className="content"
        style={{
          opacity: this.animatedValueFromLeft,
          transform: [{ translateX: marginLeft }],
        }}
      >
    
    <div className="row">
    <div className="col-sm-8">
            <h4>
                    Hello, my name is Harsha Kocherla. I am a Front-End Developer currently located in Minneapolis, Minnesota.
                    </h4>
                    <hr/>
                    <p>I design and develop websites and web applications using HTML, CSS and JavaScript. 
                      When dealing with a project I pay attention to the smallest details addressing problems with patience. 
                      Web design and development help me to free my creative mind and allow me satisfy my desire towards constant self growth.
                    </p>
    </div>
    <div className="col-sm-4">
        <img src= {require('../assets/picture.jpg')} alt="Harsha Kocherla" className = "img-fluid float-right"  style = {{maxHeight: '260px'}}/>
    </div>
</div>
      </Animated.div>
    );
  }
}

export default About;
