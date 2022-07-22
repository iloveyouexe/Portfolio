import React from "react";
import { Button } from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Button
      my={2}
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      leftIcon={<FiMail />}
    >
      Email
    </Button>
  );
};

export default ButtonMailto;
