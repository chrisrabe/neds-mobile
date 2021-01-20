import React from "react";
import PropTypes from "prop-types";
import { SvgXml } from "react-native-svg";
import { colors } from "@neds/utils/theme";

const GrayHoundSVG = ({ width, height, color }) => {
  const svgMarkup = `<svg width="105" height="50" viewBox="0 0 105 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M97.7497 3.4141C96.809 2.86344 96.1818 2.31278 94.3004 1.43172C92.419 0.550661 90.015 1.10132 88.2381 1.21145C86.5658 1.32159 83.3256 0 83.3256 0C83.221 2.7533 84.9979 4.40529 84.9979 4.40529C82.3849 5.28634 79.1447 9.36123 76.6361 10.5727C74.0231 11.8943 67.2291 9.47137 58.9718 6.4978C50.7145 3.4141 44.7567 4.51542 37.9628 8.48018C36.4994 9.36123 35.3497 10.4626 34.5135 11.5639C31.4824 12.8855 28.6602 14.8678 25.8381 17.511C21.8663 21.3656 17.7899 23.1278 13.818 22.9075C8.27834 22.5771 4.09743 18.1718 2.52959 16.2996C2.00698 15.6388 1.1708 15.5286 0.543663 16.0793C-0.0834728 16.63 -0.187995 17.6211 0.334618 18.1718C2.63411 20.9251 7.23311 25.5507 13.7135 25.8811H14.6542C19.1487 25.8811 23.5386 23.7885 27.8241 19.7137C29.2874 18.3921 30.7507 17.1806 32.3185 16.1894C31.7959 18.1718 31.9004 19.7137 31.9004 19.7137C31.9004 19.7137 30.9597 28.0837 39.217 28.1938C47.4743 28.304 46.7427 29.9559 47.9969 33.7004C48.415 35.1322 48.415 36.674 48.5195 37.9956C48.5195 37.9956 40.8894 44.163 39.7396 44.3833C38.5899 44.6035 30.5417 46.3656 31.7959 50C31.7959 50 34.8271 50 39.008 47.2467C42.1437 45.1542 45.6974 44.4934 49.4602 42.1806C49.8783 42.511 50.2964 42.8414 50.819 43.0617C54.1638 44.3833 59.7035 44.7137 63.4663 46.0352C64.3025 46.3656 65.0341 46.4758 65.8703 46.3656C67.2291 46.2555 68.9014 46.0352 68.5879 45.0441C68.0653 43.3921 66.1839 43.0617 62.9437 42.9515C57.9266 42.8414 56.8813 42.4009 55.5226 40.9692C54.3728 39.7577 52.9095 38.2159 52.9095 32.7092C52.9095 31.3877 52.7004 27.7533 52.9095 24.5595C53.2231 20.7048 46.4291 15.4185 46.4291 15.4185C53.9547 19.8238 53.7457 23.2379 54.2683 24.8899C54.7909 26.4317 57.822 27.533 57.822 27.533L53.9547 32.0485C53.9547 33.8106 54.1638 37.0044 55.1045 39.3172C55.418 37.5551 56.9859 36.674 59.5989 35.3524C62.421 34.0308 73.3959 30.5066 75.5909 27.533C77.6813 24.4493 86.3567 13.326 90.9557 11.8943C95.5547 10.5727 94.405 10.6828 96.0773 10.6828H103.289C103.609 10.6959 103.921 10.5745 104.156 10.3454C104.392 10.1163 104.531 9.79824 104.544 9.46104V8.03965C104.544 7.26872 97.7497 3.4141 97.7497 3.4141Z" fill="${color}"/>
    </svg>`;
  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={width} height={height} />
  );
  return <SvgImage />;
};

GrayHoundSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

GrayHoundSVG.defaultProps = {
  color: colors.dark,
};

export default GrayHoundSVG;
