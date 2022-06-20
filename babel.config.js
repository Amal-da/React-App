module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //chat
    plugins: [
      'react-native-reanimated/plugin', // Reanimated plugin has to be listed last.
    ],
  };
};
