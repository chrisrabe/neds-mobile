import React from "react";
import PropTypes from "prop-types";
import { SvgXml } from "react-native-svg";
import { colors } from "@neds/utils/theme";

const HorseSVG = ({ width, height, color }) => {
  const svgMarkup = `<svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M78.6089 14.5086C78.6089 14.5086 75.5824 11.0558 74.547 9.1286C73.9099 7.84384 72.3966 5.6758 70.1666 5.27431C68.4941 3.90925 66.7419 3.98955 66.7419 3.98955C66.7419 3.98955 67.379 4.47133 67.4587 5.27431C65.3879 5.27431 62.68 6.31818 61.0075 7.12116C62.0429 5.99699 62.5207 4.15014 62.6004 2.94568C62.6004 1.25942 61.2464 -0.507127 58.5385 0.135255C56.7864 0.617041 56.2288 2.46389 56.0696 3.50776C55.9899 4.47133 56.5474 5.43491 56.5474 5.43491C56.4678 5.91669 56.0696 3.82895 53.1227 3.50776C50.1759 3.18657 39.5832 3.90925 38.7868 10.574C38.3089 13.8662 44.7601 14.91 48.6626 13.545C48.6626 13.545 39.6628 16.4357 39.9018 20.6112C39.9018 21.2536 40.3 21.8959 41.0168 22.458C40.1407 21.9762 39.5036 21.3339 39.2646 20.4506C38.6275 18.3628 43.6451 14.9903 43.6451 14.9903L39.185 13.7056C39.185 13.7056 23.8136 11.0558 19.7518 15.3918C16.3271 15.713 11.6281 17.0781 9.15909 21.4945C5.09723 28.8819 0 24.064 0 24.064C0 24.064 3.74328 32.8164 10.4334 28.8819C13.6192 26.9547 12.5041 23.5019 17.1235 19.3264C15.3713 23.1807 16.0085 27.5168 24.2119 31.1302C24.2119 31.1302 27.318 32.1741 27.1587 34.7436C26.9994 37.2328 25.8047 40.6856 27.7958 41.328C29.8666 41.9704 37.5921 45.3429 38.1496 46.6277C38.6275 47.9124 39.2646 49.5184 40.9371 49.5184C42.2115 49.5987 44.7601 49.8396 45.8751 50.0002C44.2026 48.3942 42.4504 46.9489 38.7071 43.6566C37.0346 43.0143 33.5302 41.5689 33.0524 41.1674C32.4949 40.6053 31.3002 40.3644 31.5391 37.3934C31.6984 34.4224 32.4949 31.0499 32.017 27.3562C31.6188 23.6625 30.2648 22.5383 30.2648 22.5383C30.2648 22.5383 33.4506 24.867 32.8134 31.5317C32.4152 35.8678 31.7781 38.4373 33.8488 40.0432C35.9196 41.6492 38.5478 42.5325 38.5478 42.5325C38.5478 42.5325 35.5213 40.6053 34.6453 37.554C33.4506 33.3785 34.0877 30.4075 34.0877 30.4075C34.0877 30.4075 40.4593 34.8239 45.1583 34.5027C45.1583 34.5027 48.7423 38.6782 50.8927 39.8826C53.1227 41.1674 54.7156 42.6128 54.4767 43.1749C54.2377 43.8172 50.5741 45.102 50.0962 45.0217C49.6184 45.0217 48.0255 44.1384 48.0255 44.1384C48.0255 44.1384 45.4769 42.0507 45.3176 42.0507C43.4858 42.0507 42.4504 42.7734 42.4504 42.7734L42.6893 42.934C43.7247 43.5763 49.7777 47.1094 49.7777 47.1094C49.7777 47.1094 55.0342 46.3868 57.1846 44.4596C58.2996 43.4158 56.866 41.4886 55.9103 39.8024C55.0342 38.1964 53.7599 35.9481 53.7599 35.9481C53.7599 35.9481 64.4322 37.554 64.8304 37.7949C65.3083 38.1161 65.4676 41.328 64.4322 45.102L61.7243 47.1094L63.5561 50.0002C63.5561 50.0002 66.1047 47.5912 66.7419 42.8537C67.379 37.554 67.1401 36.0284 67.1401 36.0284C67.1401 36.0284 61.565 32.5756 59.9721 31.6923C58.1403 33.6194 56.4678 34.583 56.4678 34.583C59.096 31.8529 60.2111 27.9183 60.2111 27.9183C60.6093 26.4729 61.0871 24.9473 61.565 23.5019C62.68 19.9688 66.7419 15.1509 67.7773 14.91C68.733 14.7494 69.848 16.4357 72.2373 16.5963C74.547 16.8372 75.8213 18.122 75.901 19.0855C75.901 19.0855 79.0867 19.8885 79.5646 17.6402C80.0425 15.3918 78.6089 14.5086 78.6089 14.5086ZM59.8128 11.8587C57.6624 14.8297 56.1492 15.8736 55.0342 15.6327C52.9634 15.3115 50.7334 10.1725 50.7334 10.1725C50.7334 10.1725 52.9634 14.5086 55.0342 14.9903C56.6271 15.3115 57.4235 13.3041 61.2464 9.69069C62.2818 8.72712 63.2375 8.72712 63.2375 8.72712C61.9632 9.2892 60.7686 10.6543 59.8128 11.8587Z" fill="${color}"/>
    </svg>`;
  const SvgImage = () => (
    <SvgXml xml={svgMarkup} width={width} height={height} />
  );
  return <SvgImage />;
};

HorseSVG.propTypes = {
  width: PropTypes.number,
  height: PropTypes.height,
  color: PropTypes.string,
};

HorseSVG.defaultProps = {
  color: colors.dark,
};

export default HorseSVG;