import React, { useEffect } from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks';
import { PATH_PAGE } from '../../routes/paths';
//
import { SLACK_CLINET_ID, SLACK_USER_SCOPE } from '../../config';

export default function SignIn() {
  const navigate = useNavigate();
  const { signin, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/${PATH_PAGE.order}`);
    }

    window.addEventListener('message', (e) => {
      if (e.data?.code) {
        signin(e.data.code).then(() => {
          navigate(`/${PATH_PAGE.order}`);
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

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
            <Typography variant="h5">로그인 후 이용할 수 있습니다🙏</Typography>
          </Grid>
          <Grid item xs={12} pt={1}>
            <Stack>
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
              <Typography variant="caption">Slack으로 로그인하기</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
