import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

interface SimpleDialogProps {
  open: boolean;
  setOpen: Function;
}

export default function Videocomp(props: SimpleDialogProps) {
  const { open, setOpen } = props;

  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      open={open}
    >
      <DialogTitle>See Movie Trailers</DialogTitle>
    </Dialog>
  );
}
