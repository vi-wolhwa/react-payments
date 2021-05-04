import React from "react";
import PropTypes from "prop-types";

const ToolTip = ({ isVisible }) =>
  isVisible && (
    <div className="flex items-center h-11">
      <span className="left-arrow w-0 h-0 border-8 border-custom-darkgray" />
      <span className="p-2 text-custom-white text-xs bg-custom-darkgray rounded-lg">
        카드 뒷면 서명란 끝의 3~4자리 숫자를 입력해주세요.
      </span>
    </div>
  );

ToolTip.propTypes = {
  isVisible: PropTypes.bool,
};

ToolTip.defaultProps = {
  isVisible: false,
};

export default ToolTip;
