import React, { Component } from 'react';

import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';


class Work extends Component {
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

  animatedValueToRight = new Animated.Value(1);

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
      <div>
        <Animated.div
          className="content"
          style={{
            opacity: this.animatedValueFromLeft,
            transform: [{ translateX: marginLeft }],
          }}
        >
          <h2>Blue Cross Blue Shield MN</h2>
          
          <p>
          DO. App: A mobile app (do. Fun stuff for your health) for both Android and IOS, which contains a variety of
          physical activities to fuel, move and relax. The app also allows the user to set reminders for the activities.
          Worked on creating and enhancing the front-end content using React Native. Developed back-end code using
          AWS services. 
        </p>
            <h4>Environment</h4>
            <p>
            ES6, React Native, React devtools, Redux devtools, Sketch, Source Tree, CodeCommit, Exponent, Docker,
            Visual Studio Code, MAC OS.
            </p>
        <h2>Supervalu</h2>
            <p>Enhancing e-Business applications for Supervalu. This application involves handling electronic promotions
                offered by Vendors to Supervalu. It also involves inventory management for Supervalu. This application allows
                the users to access orders within the Supervalu database for all stores to which the user have access. Using
                eMerch, the user may search for orders, view them and make changes to them. The user may also create new
                orders with Order Entry, view items that are authorized for a selected store and download sales history
                information. The Weekly Ads and Surveys functionalities provide a store view of EMS promotional
                events. Also, there are various other applications like eOrder, Dynamic Promotional Planning, Displaying
                Planner and Ordering etc.</p>
                <h4>Environment</h4>
            <p>
                JSX, React JS, Redux, Babel, promises, node JS, HTML5, CSS3, Jenkins, JSON, JavaScript, Web pack.
            </p>
        </Animated.div>
      </div>
    );
  }
}

export default Work;
