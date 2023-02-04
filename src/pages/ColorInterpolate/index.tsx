import { useState } from 'react';
import { StyleSheet, Switch, Dimensions } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming
} from 'react-native-reanimated';

const Colors = {
  dark: {
    background: '#1E1E1E',
    circle: '#252525',
    text: '#F8F8F8'
  },

  light: {
    background: '#F8F8F8',
    circle: '#FFF',
    text: '#1E1E1E'
  }
};

const SWTICH_TRACK_COLOR = {
  true: 'rgba(256, 0, 256, 0.2)',
  false: 'rgba(0,0,0,0.1)'
};

type Theme = 'light' | 'dark';

export function ColorInterpolate(): JSX.Element {
  const [theme, setTheme] = useState<Theme>('light');

  const handleSetTheme = (value: boolean) => {
    setTheme(value ? 'light' : 'dark');
  };

  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withTiming(1) : withTiming(0);
  }, [theme]);

  const animatedContainerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background]
    );

    return { backgroundColor };
  });

  const animatedCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle]
    );

    return { backgroundColor };
  });

  const animatedTextstyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text]
    );

    return { color };
  });

  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <Animated.Text style={[styles.text, animatedTextstyle]}>
        Theme
      </Animated.Text>
      <Animated.View style={[styles.circle, animatedCircleStyle]}>
        <Switch
          value={theme === 'light'}
          onValueChange={handleSetTheme}
          trackColor={SWTICH_TRACK_COLOR}
          thumbColor="violet"
        />
      </Animated.View>
    </Animated.View>
  );
}

const SIZE = Dimensions.get('window').width * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZE / 2,
    shadowColor: '#444',
    elevation: 15
  },
  text: {
    fontSize: 70,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 14,
    marginBottom: 35
  }
});
