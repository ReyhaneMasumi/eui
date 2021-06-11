import lightColors from '!!sass-vars-to-js-loader!../../../../src/global_styling/variables/_colors.scss';
import darkColors from '!!sass-vars-to-js-loader!../../../../src/themes/eui/eui_colors_dark.scss';
import lightFanavaColors from '!!sass-vars-to-js-loader!../../../../src/themes/eui-fanava/eui_fanava_colors_light.scss';
import lightAmsterdamColors from '!!sass-vars-to-js-loader!../../../../src/themes/eui-amsterdam/eui_amsterdam_colors_light.scss';
import darkAmsterdamColors from '!!sass-vars-to-js-loader!../../../../src/themes/eui-amsterdam/eui_amsterdam_colors_dark.scss';

export const getSassVars = (theme) => {
  let palette;
  switch (theme) {
    case 'amsterdam-dark':
      palette = { ...darkColors, ...darkAmsterdamColors };
      break;
    case 'amsterdam-light':
      palette = { ...lightColors, ...lightAmsterdamColors };
      break;
    case 'fanava-light':
      palette = { ...lightColors, ...lightFanavaColors };
      break;
    case 'dark':
      palette = darkColors;
      break;
    default:
      palette = lightColors;
      break;
  }

  return palette;
};
