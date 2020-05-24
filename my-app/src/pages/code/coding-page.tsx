import React from "react";

import styled from "styled-components";

const Lmao = styled.div`
  height: 200px;
  width: 200px;
  background: red;
`;

const CodingPage = () => {
  return (
    <div>
      Some code
      <Lmao />
    </div>
  );
};

export default CodingPage;
