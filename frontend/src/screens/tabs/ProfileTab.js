// Wrapper for the Profile tab. Re-export or add small wrappers specific to tab.
import React from "react";
import ProfileScreen from "../ProfileScreen";

export default function ProfileTab(props) {
  return <ProfileScreen {...props} />;
}
