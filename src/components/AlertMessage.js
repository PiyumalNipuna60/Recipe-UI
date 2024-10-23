// AlertMessage.js
import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertMessage = ({ message, severity }) => {
  if (!message) return null;

  return (
    <Stack sx={{ width: "100%", marginBottom: 2 }} spacing={2}>
      <Alert severity={severity}>{message}</Alert>
    </Stack>
  );
};

export default AlertMessage;
