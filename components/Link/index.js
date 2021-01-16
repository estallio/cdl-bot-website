import React, { Children } from 'react';

import { withRouter } from 'next/router';

import classNames from 'classnames';

import { Link } from '../../i18n';

export default withRouter(
  ({ router, defaultClass, activeClass, children, as, href, ...rest }) => {
    return (
      <Link {...rest} href={href} as={as}>
        {React.cloneElement(Children.only(children), {
          className: classNames(children.props.className, defaultClass, {
            [activeClass]: router.asPath === href || router.asPath === as,
          }),
        })}
      </Link>
    );
  }
);
