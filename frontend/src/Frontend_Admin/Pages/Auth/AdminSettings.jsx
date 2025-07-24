import React from "react";

import Title from "../../../Common/Title";

import "./adminSettingStyles.css";
import AdvertisementsAdminSettings from "./AdvertisementsAdminSettings";
import UploadBrochures from "./UploadBrochures";

const AdminSettings = () => {
  const pageType = "settings";

  return (
    <div className="container-fluid pt-4 contactsList">
      <div className="row px-2 px-lg-5">
        <div className="col-sm-12 col-md-7">
          <Title title={"Settings"} cssClass="pageTitle" />
        </div>
      </div>
      <>
        
        <UploadBrochures />
        <hr/>
        <AdvertisementsAdminSettings />
        <hr/>
      </>
    </div>
  );
};

export default AdminSettings;
