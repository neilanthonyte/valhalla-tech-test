import React from "react";

export const showDownloadBtnHook = (index) => {
    const [showBtn, setShowBtn] = React.useState(false);

    return {showBtn, setShowBtn};
}