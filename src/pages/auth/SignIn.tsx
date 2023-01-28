import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { SLACK_CLINET_ID, SLACK_USER_SCOPE } from '../../config';

export default function SignIn() {
  const handlePopup = (e: React.MouseEvent) => {
    e.preventDefault();
    const width = 500;
    const height = 700;
    const left = window.screen.width;
    const top = 0;

    window.open(
      `https://slack.com/oauth/v2/authorize?client_id=${SLACK_CLINET_ID}&user_scope=${SLACK_USER_SCOPE}&scope=incoming-webhook`,
      `Slack Signin`,
      `width=${width}, height=${height}, left=${left}, top=${top}, location=no, status=no, toolbar=no, menubar=no, scrollbars=no, resizable=no`
    );
  };

  return (
    <main>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={12}>
            <Typography variant="h5">슬랙(Slack)으로 로그인 후 이용할 수 있습니다🙏</Typography>
          </Grid>
          <Grid item xs={12} pt={1}>
            <a
              href={`https://slack.com/oauth/v2/authorize?client_id=${SLACK_CLINET_ID}&user_scope=${SLACK_USER_SCOPE}&scope=incoming-webhook`}
              rel="noopener noreferrer"
              target="_blank"
              onClick={handlePopup}
            >
              <img
                alt="Add to Slack"
                height="40"
                width="139"
                src="https://platform.slack-edge.com/img/add_to_slack.png"
                srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
