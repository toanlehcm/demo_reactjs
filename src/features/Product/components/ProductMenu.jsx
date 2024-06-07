import { Box, Link } from '@mui/material';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

ProductMenu.propTypes = {};

function ProductMenu(props) {
  const theme = useTheme();
  const { url } = useRouteMatch();

  return (
    <Box
      component='ul'
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        listStyleType: 'none',

        '& > li': {
          padding: theme.spacing(2, 4),
        },

        '& > li > a': {
          color: theme.palette.grey[700],
        },

        '& > li > a.active': {
          color: theme.palette.primary.main,
          textDecoration: 'underline',
        },
      }}
    >
      <li>
        <Link component={NavLink} to={url} exact>
          Description
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/additional`} exact>
          Additional Information
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/reviews`} exact>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
