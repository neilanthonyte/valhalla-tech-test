import React from "react";

export const showDownloadBtnHook = () => {
    const [showBtn, setShowBtn] = React.useState(false);

    return {showBtn, setShowBtn};
}