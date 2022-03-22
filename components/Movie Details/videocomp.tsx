import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

interface SimpleDialogProps {
  open: boolean;
}

export default function Videocomp(props: SimpleDialogProps) {
  const { open } = props;

  return (
    <Dialog open={open}>
      <DialogTitle>See Movie Trailers</DialogTitle>
    </Dialog>
  );
}
