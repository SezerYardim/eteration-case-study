import { Grid2 as Grid, Typography } from "@mui/material";

export default function InfoCaption({ caption }: { caption: string }) {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Typography data-testid="info-caption" variant="caption" color="textPrimary">
        {caption}
      </Typography>
    </Grid>
  );
}
