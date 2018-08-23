import React from 'react';
import { View } from 'react-native';
import SceneView from '../SceneView';
import withCachedChildNavigation from '../../withCachedChildNavigation';

class SwitchContainer extends React.Component {
  render() {
    const { screenProps } = this.props;

    const Container = this.props.container || View;

    const route = this.props.navigation.state.routes[
      this.props.navigation.state.index
    ];
    const childNavigation = this.props.childNavigationProps[route.key];
    const ChildComponent = this.props.router.getComponentForRouteName(
      route.routeName
    );

    return (
      <Container
        flex={ 1 }
        { ...this.props }
        navigation={childNavigation}
      >
        <SceneView
          component={ChildComponent}
          navigation={childNavigation}
          screenProps={screenProps}
        />
      </Container>
    );
  }
}

export default withCachedChildNavigation(SwitchContainer);
