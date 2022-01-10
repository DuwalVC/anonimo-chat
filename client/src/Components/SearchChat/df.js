import React from "react";
import Edit from "../../assets/images/edit.svg";

import { StyledProfile, StyledButton, StyledInput } from "./styled";

function Profile() {
  return (
    <StyledProfile>
      <StyledInput value="Duwal" disabled={true} />
      <StyledButton>
        <img src={Edit} />
      </StyledButton>
    </StyledProfile>
  );
}

export default Profile;
